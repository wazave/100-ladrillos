import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import AccountValue from 'components/AccountValue';

import { accountValueMessages } from './messages';
import {
  selectAccountDataStatus,
  selectAccountValues,
  selectAccountTotalValue,
} from './selectors';

const valuesMetadata = [
  { key: 'brickInvestment', separator: true },
  { key: 'capitalGain', separator: true },
  { key: 'revolvingFund', separator: true },
  { key: 'bricksInPurchase', separator: true, underlineValue: true },
  { key: 'pendingRents', separator: true, underlineValue: true, warning: true },
  { key: 'availableCash', greenValue: true },
];

function AccountValueContainer(props) {
  const { formatMessage } = props.intl;
  function createAccountValueValue({ key, warning, ...rest }) {
    const warningText = warning
      ? formatMessage({ ...accountValueMessages[`${key}Warning`] })
      : undefined;
    return (
      <AccountValue.Value
        key={key}
        legend={formatMessage({ ...accountValueMessages[key] })}
        warning={warningText}
        value={props.accountValues[key]}
        {...rest}
      />
    );
  }
  return (
    <AccountValue>
      <AccountValue.TotalValue
        legend={formatMessage({ ...accountValueMessages.accountTotal })}
        value={props.accountTotal}
      />
      {valuesMetadata.map(createAccountValueValue)}
    </AccountValue>
  );
}

AccountValueContainer.propTypes = {
  // accountDataStatus: PropTypes.string.isRequired,
  accountTotal: PropTypes.number,
  accountValues: PropTypes.shape({
    availableCash: PropTypes.number,
    brickInvestment: PropTypes.number,
    bricksInPurchase: PropTypes.number,
    capitalGain: PropTypes.number,
    pendingRents: PropTypes.number,
    revolvingFund: PropTypes.number,
  }),
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired })
    .isRequired,
};

const mapStateToProps = createStructuredSelector({
  accountDataStatus: selectAccountDataStatus,
  accountTotal: selectAccountTotalValue,
  accountValues: selectAccountValues,
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  injectIntl,
)(AccountValueContainer);

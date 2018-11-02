/**
 *
 * MyAccountContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import AccountValue from 'components/AccountValue';
import Button from 'components/Button';
import Header from 'components/Header';

import HeaderButtonSeparator from './HeaderButtonSeparator';

import makeSelectMyAccountContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class MyAccountContainer extends React.Component {
  render() {
    const { intl } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>{intl.formatMessage({ ...messages.title })}</title>
          <meta
            name="description"
            content={intl.formatMessage({ ...messages.description })}
          />
        </Helmet>
        <HeaderButtonSeparator>
          <Header>{intl.formatMessage({ ...messages.header })}</Header>
          <Button>{intl.formatMessage({ ...messages.seeCashFlow })}</Button>
        </HeaderButtonSeparator>
        <AccountValue>
          <AccountValue.TotalValue
            legend="Valor de la cuenta:"
            value="$1,000,000"
          />
          <AccountValue.Value
            legend="Inversión ladrillos"
            value="$700,000"
            separator
          />
          <AccountValue.Value legend="Plusvalía" value="$150,000" separator />
          <AccountValue.Value
            legend="Fondo revolvente"
            value="$30,000"
            separator
          />
          <AccountValue.Value
            legend="Ladrillos en proceso de compra"
            value="$25,000"
            separator
            underlineValue
          />
          <AccountValue.Value
            legend="Renta pendiente de liberar"
            value="$85,000"
            separator
            underlineValue
            warning="Liberar"
          />
          <AccountValue.Value
            legend="Dinero disponible"
            value="$10,000"
            greenValue
          />
        </AccountValue>
      </React.Fragment>
    );
  }
}

MyAccountContainer.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired })
    .isRequired,
};

const mapStateToProps = createStructuredSelector({
  myAccountContainer: makeSelectMyAccountContainer(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'myAccountContainer', reducer });
const withSaga = injectSaga({ key: 'myAccountContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(MyAccountContainer);

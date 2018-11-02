import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from 'components/Header';

import messages from './messages';

function WithdrawContainer(props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{props.intl.formatMessage({ ...messages.title })}</title>
        <meta
          name="description"
          content={props.intl.formatMessage({ ...messages.description })}
        />
      </Helmet>
      <Header>{props.intl.formatMessage({ ...messages.header })}</Header>
    </React.Fragment>
  );
}

WithdrawContainer.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired })
    .isRequired,
};

export default injectIntl(WithdrawContainer);

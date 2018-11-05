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
import { bindActionCreators, compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Button from 'components/Button';
import Header from 'components/Header';

import HeaderButtonSeparator from './HeaderButtonSeparator';
import AccountValueContainer from './AccountValueContainer';
import MyProfitsContainer from './MyProfitsContainer';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { accountDataRequest } from './actions';
import { key } from './constants';

/* eslint-disable react/prefer-stateless-function */
export class MyAccountContainer extends React.Component {
  componentDidMount() {
    this.props.accountDataRequest();
  }

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
        <AccountValueContainer />
        <MyProfitsContainer />
      </React.Fragment>
    );
  }
}

MyAccountContainer.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired })
    .isRequired,
  accountDataRequest: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ accountDataRequest }, dispatch);
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key, reducer });
const withSaga = injectSaga({ key, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(MyAccountContainer);

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

// import AccountValue from 'components/AccountValue';
import Button from 'components/Button';
import Header from 'components/Header';
// import MyProfits from 'components/MyProfits';

// import stimatedRent from 'images/renta-anual-estimada.svg';
// import actualRent from 'images/renta-anual-actual.svg';
// import actualRent2 from 'images/renta-anual-actual (1).svg';
// import handshake from 'images/handshake.svg';

import HeaderButtonSeparator from './HeaderButtonSeparator';
import AccountValueContainer from './AccountValueContainer';

// import makeSelectMyAccountContainer from './selectors';
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
        {/* <Header slim>
          {intl.formatMessage({ ...messages.myProfitsHeader })}
        </Header>
        <MyProfits>
          <MyProfits.Overview>
            <MyProfits.OverviewSum legend="Mi Rendimiento:" value={435000} />
            <MyProfits.OverviewDetail
              icon={stimatedRent}
              legend="Mi Rendimiento:"
              value={150000}
              separator
            />
            <MyProfits.OverviewDetail
              icon={handshake}
              legend="Utilidad de Ventas:"
              value={100000}
              separator
            />
            <MyProfits.OverviewDetail
              icon={actualRent}
              legend="Rentas Recibidas:"
              value={180000}
              separator
            />
            <MyProfits.OverviewDetail
              icon={actualRent2}
              legend="Otros:"
              value={5000}
            />
          </MyProfits.Overview>
        </MyProfits> */}
      </React.Fragment>
    );
  }
}

MyAccountContainer.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired })
    .isRequired,
  accountDataRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // myAccountContainer: makeSelectMyAccountContainer(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ accountDataRequest }, dispatch);
}

const withConnect = connect(
  mapStateToProps,
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

/**
 *
 * SidebarContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Sidebar from 'components/Sidebar';

// sidebar icons
import addIcon from 'images/agragar-fondos.svg';
import movementsIcon from 'images/ic-movimietos-active.svg';
import myAccountIcon from 'images/icon-micuenta-on.svg';
import logo from 'images/logotipo-v-2.svg';
import sellIcon from 'images/nav-bar-vender.svg';
import withdrawlIcon from 'images/retirar-fondos.svg';
import buyIcon from 'images/comprar.svg';

import reducer from './reducer';
import makeSelectSidebarContainer from './selectors';
import saga from './saga';
import messages from './messages';
import { navigate } from './actions';

const sidebarButtonsMetadata = [
  {
    icon: myAccountIcon,
    key: 'my-account',
    text: 'Mi Cuenta',
  },
  {
    icon: buyIcon,
    key: 'buy',
    text: 'Comprar',
  },
  {
    icon: sellIcon,
    key: 'sell',
    text: 'Vender',
  },
  {
    icon: addIcon,
    key: 'add',
    text: 'Agregar Fondos',
  },
  {
    icon: withdrawlIcon,
    key: 'withdraw',
    text: 'Retirar Fondos',
  },
  {
    icon: movementsIcon,
    key: 'movements',
    text: 'Movimientos',
  },
];

class SidebarContainer extends React.Component {
  state = {
    activeSidebarButtonKey: 'my-account',
  };

  createSidebarButton = props => (
    <Sidebar.Button
      active={props.key === this.state.activeSidebarButtonKey}
      onClick={this.handleSidebarButtonClick(props.key)}
      {...props}
    />
  );

  handleSidebarButtonClick = buttonKey => () => {
    this.props.navigate(buttonKey);
    this.setState({ activeSidebarButtonKey: buttonKey });
  };

  render() {
    return (
      <Sidebar>
        <Sidebar.Image src={logo} />
        <Sidebar.Indicator
          legend={this.props.intl.formatMessage({ ...messages.accountWorth })}
          value="$1.000.000"
        />
        <Sidebar.Indicator
          legend={this.props.intl.formatMessage({
            ...messages.availableCredit,
          })}
          value="$10.000"
        />
        {sidebarButtonsMetadata.map(this.createSidebarButton)}
      </Sidebar>
    );
  }
}

SidebarContainer.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired })
    .isRequired,
  navigate: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sidebarContainer: makeSelectSidebarContainer(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ navigate }, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'sidebarContainer', reducer });
const withSaga = injectSaga({ key: 'sidebarContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(SidebarContainer);

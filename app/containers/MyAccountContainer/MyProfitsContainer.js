import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Header from 'components/Header';
import MyProfits from 'components/MyProfits';

import stimatedRent from 'images/renta-anual-estimada.svg';
import actualRent from 'images/renta-anual-actual.svg';
import actualRent2 from 'images/renta-anual-actual (1).svg';
import handshake from 'images/handshake.svg';

import MyProfitsGraph from './MyProfitsGraph';

import messages from './messages';
import {
  selectMyProfitsTotal,
  selectMyProfitsStatus,
  selectMyProfitsGraphData,
  selectMyProfitsCapitalGain,
} from './selectors';

const StyledLabelBackground = styled.div`
  position: absolute;
  bottom: 0;
  background: #9c9c9c;
  height: 32px;
  width: 100%;
  z-index: 0;
`;

function AccountValueContainer(props) {
  return (
    <React.Fragment>
      <Header slim>{messages.myProfitsHeader.defaultMessage}</Header>
      <MyProfits>
        <MyProfits.Overview>
          <MyProfits.OverviewSum legend="Mi Rendimiento:" value={435000} />
          <MyProfits.OverviewDetail
            icon={stimatedRent}
            legend="Plusvalía:"
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
        <MyProfitsGraph data={props.myProfitsGraphData} />
        <StyledLabelBackground />
      </MyProfits>
    </React.Fragment>
  );
}

AccountValueContainer.propTypes = {
  // myProfitsStatus: PropTypes.string.isRequired,
  // myProfitsTotal: PropTypes.number,
  myProfitsGraphData: PropTypes.shape({
    dates: PropTypes.arrayOf(PropTypes.string),
    sales: PropTypes.arrayOf(PropTypes.number),
    rents: PropTypes.arrayOf(PropTypes.number),
    others: PropTypes.arrayOf(PropTypes.number),
  }),
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired })
    .isRequired,
};

const mapStateToProps = createStructuredSelector({
  myProfitsTotal: selectMyProfitsTotal,
  myProfitsStatus: selectMyProfitsStatus,
  myProfitsGraphData: selectMyProfitsGraphData,
  myProfitsCapitalGain: selectMyProfitsCapitalGain,
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  injectIntl,
)(AccountValueContainer);

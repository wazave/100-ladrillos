/**
 *
 * MyProfits
 *
 */

import React from 'react';

import MyProfitsWrapper from './MyProfitsWrapper';
import Overview from './Overview';
import OverviewDetail from './OverviewDetail';
import OverviewSum from './OverviewSum';

function MyProfits(props) {
  return <MyProfitsWrapper {...props} />;
}

MyProfits.propTypes = {};

MyProfits.Overview = Overview;
MyProfits.OverviewDetail = OverviewDetail;
MyProfits.OverviewSum = OverviewSum;

export default MyProfits;

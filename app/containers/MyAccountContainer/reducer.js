/*
 *
 * MyAccountContainer reducer
 *
 */

import { fromJS } from 'immutable';

import { STATUS } from 'utils/request';

import {
  ACCOUNT_DATA_FAILURE,
  ACCOUNT_DATA_REQUEST,
  ACCOUNT_DATA_SUCCESS,
} from './constants';

// immutablejs keys
const accountData = 'accountData';
const accountDataStatus = [accountData, '__status'];

export const initialState = fromJS({
  accountData: {
    __status: STATUS.INITIAL,
    brick_investment: 700000,
    capital_gain: 150000,
    revolving_fund: 30000,
    bricks_in_purchase: 25000,
    pending_rents: 1000,
    available_cash: 12000,
  },
});

function myAccountContainerReducer(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_DATA_FAILURE:
      return state.setIn(accountDataStatus, STATUS.FAILURE);
    case ACCOUNT_DATA_REQUEST:
      return state.setIn(accountDataStatus, STATUS.REQUEST);
    case ACCOUNT_DATA_SUCCESS:
      return state.mergeIn(accountData, {
        __status: STATUS.SUCCESS,
        ...action.payload,
      });
    default:
      return state;
  }
}

export default myAccountContainerReducer;

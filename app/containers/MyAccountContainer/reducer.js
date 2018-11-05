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
  MY_PROFITS_FAILURE,
  MY_PROFITS_REQUEST,
  MY_PROFITS_SUCCESS,
} from './constants';

// immutablejs keys
const accountData = 'accountData';
const accountDataStatus = [accountData, '__status'];
const myProfits = 'myProfits';
const myProfitsStatus = [myProfits, '__status'];

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
  myProfits: {
    profit: 435000,
    transactions: [
      {
        year: 2016,
        month: 1,
        profits: {
          sales: 15000,
          rents: 3000,
          others: 1000,
        },
      },
      {
        year: 2016,
        month: 2,
        profits: {
          sales: 1000,
          rents: 0,
          others: 0,
        },
      },
      {
        year: 2016,
        month: 3,
        profits: {
          sales: 19320,
          rents: 1500,
          others: 50,
        },
      },
      {
        year: 2016,
        month: 4,
        profits: {
          sales: 15000,
          rents: 2000,
          others: 100,
        },
      },
      {
        year: 2016,
        month: 5,
        profits: {
          sales: 35000,
          rents: 3000,
          others: 10000,
        },
      },
      {
        year: 2016,
        month: 6,
        profits: {
          sales: 27800,
          rents: 1040,
          others: 2000,
        },
      },
      {
        year: 2016,
        month: 7,
        profits: {
          sales: 5000,
          rents: 10000,
          others: 100,
        },
      },
      {
        year: 2016,
        month: 8,
        profits: {
          sales: 15000,
          rents: 3000,
          others: 0,
        },
      },
      {
        year: 2016,
        month: 9,
        profits: {
          sales: 54000,
          rents: 1400,
          others: 4000,
        },
      },
      {
        year: 2016,
        month: 10,
        profits: {
          sales: 9900,
          rents: 800,
          others: 1960,
        },
      },
      {
        year: 2016,
        month: 11,
        profits: {
          sales: 67800,
          rents: 7800,
          others: 190,
        },
      },
      {
        year: 2016,
        month: 12,
        profits: {
          sales: 15000,
          rents: 3000,
          others: 1000,
        },
      },
      {
        year: 2017,
        month: 1,
        profits: {
          sales: 13400,
          rents: 3000,
          others: 100,
        },
      },
      {
        year: 2017,
        month: 2,
        profits: {
          sales: 120000,
          rents: 3000,
          others: 0,
        },
      },
      {
        year: 2017,
        month: 3,
        profits: {
          sales: 0,
          rents: 3000,
          others: 0,
        },
      },
      {
        year: 2017,
        month: 4,
        profits: {
          sales: 0,
          rents: 3000,
          others: 0,
        },
      },
      {
        year: 2017,
        month: 5,
        profits: {
          sales: 0,
          rents: 3000,
          others: 0,
        },
      },
      {
        year: 2017,
        month: 6,
        profits: {
          sales: 0,
          rents: 4000,
          others: 0,
        },
      },
      {
        year: 2017,
        month: 7,
        profits: {
          sales: 0,
          rents: 4000,
          others: 0,
        },
      },
      {
        year: 2017,
        month: 8,
        profits: {
          sales: 0,
          rents: 4000,
          others: 0,
        },
      },
      {
        year: 2017,
        month: 9,
        profits: {
          sales: 1500,
          rents: 4000,
          others: 0,
        },
      },
      {
        year: 2017,
        month: 10,
        profits: {
          sales: 22000,
          rents: 2000,
          others: 1090,
        },
      },
      {
        year: 2017,
        month: 11,
        profits: {
          sales: 1000,
          rents: 3000,
          others: 100,
        },
      },
      {
        year: 2017,
        month: 12,
        profits: {
          sales: 10000,
          rents: 3000,
          others: 0,
        },
      },
      {
        year: 2018,
        month: 1,
        profits: {
          sales: 0,
          rents: 7000,
          others: 0,
        },
      },
      {
        year: 2018,
        month: 2,
        profits: {
          sales: 42000,
          rents: 7000,
          others: 0,
        },
      },
      {
        year: 2018,
        month: 3,
        profits: {
          sales: 0,
          rents: 7000,
          others: 0,
        },
      },
      {
        year: 2018,
        month: 4,
        profits: {
          sales: 0,
          rents: 7000,
          others: 0,
        },
      },
      {
        year: 2018,
        month: 5,
        profits: {
          sales: 20000,
          rents: 7000,
          others: 0,
        },
      },
    ],
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
    case MY_PROFITS_FAILURE:
      return state.setIn(myProfitsStatus, STATUS.FAILURE);
    case MY_PROFITS_REQUEST:
      return state.setIn(myProfitsStatus, STATUS.REQUEST);
    case MY_PROFITS_SUCCESS:
      return state.mergeIn(myProfits, {
        __status: STATUS.SUCCESS,
        ...action.payload,
      });
    default:
      return state;
  }
}

export default myAccountContainerReducer;

/*
 *
 * MyAccountContainer actions
 *
 */

import {
  ACCOUNT_DATA_FAILURE,
  ACCOUNT_DATA_REQUEST,
  ACCOUNT_DATA_SUCCESS,
} from './constants';

export function accountDataRequest() {
  return { type: ACCOUNT_DATA_REQUEST };
}

export function accountDataSuccess(payload) {
  return { type: ACCOUNT_DATA_SUCCESS, payload };
}

export function accountDataFailure() {
  return { type: ACCOUNT_DATA_FAILURE };
}

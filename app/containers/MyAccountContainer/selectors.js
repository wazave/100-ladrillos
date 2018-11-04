import { createSelector } from 'reselect';

import { objectSnakeToCamel } from 'utils/snakeToCamel';

import { initialState } from './reducer';
import { key } from './constants';

/* eslint-disable no-underscore-dangle */

const selectMyAccountContainer = state => state.get(key, initialState).toJS();

const selectAccountValues = createSelector(
  selectMyAccountContainer,
  substate => {
    const result = objectSnakeToCamel(substate.accountData);
    delete result._status;
    return result;
  },
);

const selectAccountDataStatus = createSelector(
  selectMyAccountContainer,
  substate => substate.accountData.__status,
);

const selectAccountTotalValue = createSelector(
  selectAccountValues,
  accountValues =>
    Object.keys(accountValues).reduce(
      (sum, k) => (k !== '_status' ? sum + accountValues[k] : sum),
      0,
    ),
);

export {
  selectAccountDataStatus,
  selectAccountValues,
  selectAccountTotalValue,
};

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

const selectMyProfitsTotal = createSelector(
  selectMyAccountContainer,
  substate => substate.myProfits.profit,
);

const selectMyProfitsStatus = createSelector(
  selectMyAccountContainer,
  substate => substate.myProfits.__status,
);

const selectMyProfitsTransactions = createSelector(
  selectMyAccountContainer,
  substate => substate.myProfits.transactions,
);

const selectMyProfitsGraphData = createSelector(
  selectMyProfitsTransactions,
  transactions =>
    transactions.reduce(
      (prev, { year, month, profits }) => {
        prev.dates.push(`${year}-${month}`);
        prev.sales.push(profits.sales);
        prev.rents.push(profits.rents);
        prev.others.push(profits.others);
        return prev;
      },
      { dates: [], sales: [], rents: [], others: [] },
    ),
);

const selectMyProfitsCapitalGain = createSelector(
  selectMyProfitsTotal,
  selectMyProfitsGraphData,
  (totalGains, { sales, rents, others }) => {
    const sum = (total, current) => total + current;
    const totalSales = sales.slice().reduce(sum);
    const totalRents = rents.slice().reduce(sum);
    const totalOthers = others.slice().reduce(sum);
    return {
      totalSales,
      totalRents,
      totalOthers,
    };
  },
);

export {
  selectAccountDataStatus,
  selectAccountValues,
  selectAccountTotalValue,
  selectMyProfitsTotal,
  selectMyProfitsStatus,
  selectMyProfitsGraphData,
  selectMyProfitsCapitalGain,
};

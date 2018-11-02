import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myAccountContainer state domain
 */

const selectMyAccountContainerDomain = state =>
  state.get('myAccountContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyAccountContainer
 */

const makeSelectMyAccountContainer = () =>
  createSelector(selectMyAccountContainerDomain, substate => substate.toJS());

export default makeSelectMyAccountContainer;
export { selectMyAccountContainerDomain };

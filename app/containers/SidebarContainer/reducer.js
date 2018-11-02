/*
 *
 * SidebarContainer reducer
 *
 */

import { fromJS } from 'immutable';

import { NAVIGATE } from './constants';

export const initialState = fromJS({});

function sidebarContainerReducer(state = initialState, action) {
  switch (action.type) {
    case NAVIGATE:
      return state;
    default:
      return state;
  }
}

export default sidebarContainerReducer;

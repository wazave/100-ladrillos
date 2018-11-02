/*
 *
 * SidebarContainer actions
 *
 */

import { DEFAULT_ACTION, NAVIGATE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function navigate(to) {
  return {
    type: NAVIGATE,
    payload: {
      path: `/${to}`,
    },
  };
}

/*
 *
 * SidebarContainer actions
 *
 */

import { NAVIGATE } from './constants';

export function navigate(to) {
  return {
    type: NAVIGATE,
    payload: {
      path: `/${to}`,
    },
  };
}

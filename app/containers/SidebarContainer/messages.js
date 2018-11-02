/*
 * SidebarContainer Messages
 *
 * This contains all the text for the SidebarContainer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SidebarContainer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the SidebarContainer container!',
  },
  accountWorth: {
    id: `${scope}.accountWorth`,
    defaultMessage: 'Valor de la cuenta',
  },
  availableCredit: {
    id: `${scope}.availableCredit`,
    defaultMessage: 'Saldo disponible',
  },
});

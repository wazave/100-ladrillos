/*
 * MyAccountContainer Messages
 *
 * This contains all the text for the MyAccountContainer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MyAccountContainer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Mi Cuenta',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Mi Cuenta - 100 Ladrillos',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Ver mi cuenta',
  },
  seeCashFlow: {
    id: `${scope}.seeCashFlow`,
    defaultMessage: 'Ver flujo de efectivo',
  },
});

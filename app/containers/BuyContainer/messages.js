/*
 * BuyContainer Messages
 *
 * This contains all the text for the BuyContainer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.BuyContainer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Comprar',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Comprar - 100 Ladrillos',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Comprar ladrillos',
  },
});

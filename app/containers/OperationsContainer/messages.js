import { defineMessages } from 'react-intl';

export const scope = 'app.containers.OperationsContainer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Movimientos',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Movimientos - 100 Ladrillos',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Movimientos en mi cuenta',
  },
});

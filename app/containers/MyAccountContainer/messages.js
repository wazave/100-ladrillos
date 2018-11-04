/*
 * MyAccountContainer Messages
 *
 * This contains all the text for the MyAccountContainer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MyAccountContainer';
export const accountValueScope = `${scope}.accountValue`;

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
  myProfitsHeader: {
    id: `${scope}.myProfitsHeader`,
    defaultMessage: 'Mis Rendimientos',
  },
});

export const accountValueMessages = defineMessages({
  accountTotal: {
    id: `${accountValueScope}.accountTotal`,
    defaultMessage: 'Valor de la cuenta:',
  },
  brickInvestment: {
    id: `${accountValueScope}.brickInvestment`,
    defaultMessage: 'Inversión ladrillos',
  },
  capitalGain: {
    id: `${accountValueScope}.capitalGain`,
    defaultMessage: 'Plusvalía',
  },
  revolvingFund: {
    id: `${accountValueScope}.revolvingFund`,
    defaultMessage: 'Fondo revolvente',
  },
  bricksInPurchase: {
    id: `${accountValueScope}.bricksInPurchase`,
    defaultMessage: 'Ladrillos en proceso de compra',
  },
  pendingRents: {
    id: `${accountValueScope}.pendingRents`,
    defaultMessage: 'Renta pendiente de liberar',
  },
  pendingRentsWarning: {
    id: `${accountValueScope}.pendingRents`,
    defaultMessage: 'Liberar',
  },
  availableCash: {
    id: `${accountValueScope}.availableCash`,
    defaultMessage: 'Dinero disponible',
  },
});

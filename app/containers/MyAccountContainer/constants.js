/*
 *
 * MyAccountContainer constants
 *
 */

export const key = 'myAccountContainer';

const PREFIX = 'app/MyAccountContainer/';
const REQUEST = '_REQUEST';
const SUCCESS = '_SUCCESS';
const FAILURE = '_FAILURE';

const ACCOUNT_DATA = 'ACCOUNT_DATA';
export const ACCOUNT_DATA_REQUEST = `${PREFIX}${ACCOUNT_DATA}${REQUEST}`;
export const ACCOUNT_DATA_SUCCESS = `${PREFIX}${ACCOUNT_DATA}${SUCCESS}`;
export const ACCOUNT_DATA_FAILURE = `${PREFIX}${ACCOUNT_DATA}${FAILURE}`;

const MY_PROFITS = 'MY_PROFITS';
export const MY_PROFITS_REQUEST = `${PREFIX}${MY_PROFITS}${REQUEST}`;
export const MY_PROFITS_SUCCESS = `${PREFIX}${MY_PROFITS}${REQUEST}`;
export const MY_PROFITS_FAILURE = `${PREFIX}${MY_PROFITS}${REQUEST}`;

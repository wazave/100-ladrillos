/**
 *
 * AccountValue
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import AccountValueWrapper from './AccountValueWrapper';
import TotalValue from './TotalValue';
import Value from './Value';
import Separator from './Separator';

function AccountValue(props) {
  return <AccountValueWrapper {...props} />;
}

AccountValue.propTypes = {};

AccountValue.TotalValue = TotalValue;
AccountValue.Value = Value;
AccountValue.Separator = Separator;

export default AccountValue;

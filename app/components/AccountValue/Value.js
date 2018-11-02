import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import numeral from 'numeral';

import Separator from './Separator';

const StyledValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 0px 16px;
  min-width: 96px;
  max-width: 144px;
  width: 100%;
  background: ${props => props.theme.colors.backgroundLight};
`;

const StyledLegend = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: 14px;
  font-family: 'Roboto Condensed', sans-serif;
  font-stretch: condensed;
  line-height: 14px;
  text-align: center;
  margin: 0;
  margin-bottom: 4px;
`;

const StyledValue = styled(StyledLegend)`
  color: ${({ greenValue, theme }) =>
    greenValue ? theme.colors.green : theme.colors.black};
  text-decoration: ${props =>
    props.underlineValue ? 'underline' : props.theme.none};
  cursor: ${props => (props.underlineValue ? 'pointer' : props.theme.inherit)};
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  margin: 0;
`;

const StyledWarning = styled.span`
  color: ${props => props.theme.colors.red};
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  margin: 0;
  margin-top: 4px;
`;

function Value({
  greenValue,
  legend,
  separator,
  underlineValue,
  value,
  warning,
  ...rest
}) {
  const formattedValue = numeral(value).format('$0,0');
  return (
    <React.Fragment>
      <StyledValueContainer {...rest}>
        <StyledLegend>{legend}</StyledLegend>
        <StyledValue greenValue={greenValue} underlineValue={underlineValue}>
          {formattedValue}
        </StyledValue>
        {warning && <StyledWarning>{warning}</StyledWarning>}
      </StyledValueContainer>
      {separator && <Separator />}
    </React.Fragment>
  );
}

Value.propTypes = {
  greenValue: PropTypes.bool,
  legend: PropTypes.string.isRequired,
  separator: PropTypes.bool,
  underlineValue: PropTypes.bool,
  value: PropTypes.number,
  warning: PropTypes.string,
};

export default Value;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import numeral from 'numeral';

const StyledTotalValueContainer = styled.div`
  height: 96px;
  filter: drop-shadow(1px 0px 2px rgba(0, 0, 0, 0.2));
  margin-right: 8px;
`;

const StyledTotalValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 96px;
  min-width: 170px;
  padding: 19px 40px 19px 24px;
  clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
  border: 1px solid ${props => props.theme.colors.divider};
  border-radius: 8px;
  background: ${props => props.theme.colors.white};
`;

const StyledLegend = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: 24px;
  font-family: 'Roboto Condensed', sans-serif;
  font-stretch: condensed;
  line-height: 24px;
  margin: 0;
  margin-bottom: 8px;
  white-space: nowrap;
`;

const StyledValue = styled(StyledLegend)`
  color: ${props => props.theme.colors.blue};
  font-weight: 600;
  margin: 0;
`;

function TotalValue({ legend, value, ...rest }) {
  const formattedValue = numeral(value).format('$0,0');
  return (
    <StyledTotalValueContainer>
      <StyledTotalValue {...rest}>
        <StyledLegend>{legend}</StyledLegend>
        <StyledValue>{formattedValue}</StyledValue>
      </StyledTotalValue>
    </StyledTotalValueContainer>
  );
}

TotalValue.propTypes = {
  legend: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default TotalValue;

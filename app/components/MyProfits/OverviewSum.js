import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import numeral from 'numeral';

const StyledOverviewSum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 96px;
  min-width: 170px;
  border-bottom: 1px solid ${props => props.theme.colors.divider};
`;

const StyledLegend = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: 24px;
  font-family: 'Roboto Condensed', sans-serif;
  font-stretch: condensed;
  line-height: 24px;
  margin: 0;
  margin-bottom: 4px;
  white-space: nowrap;
`;

const StyledValue = styled(StyledLegend)`
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  margin: 0;
`;

function OverviewSum({ legend, value, ...rest }) {
  const formattedValue = numeral(value).format('$0,0');
  return (
    <StyledOverviewSum {...rest}>
      <StyledLegend>{legend}</StyledLegend>
      <StyledValue>{formattedValue}</StyledValue>
    </StyledOverviewSum>
  );
}

OverviewSum.propTypes = {
  legend: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default OverviewSum;

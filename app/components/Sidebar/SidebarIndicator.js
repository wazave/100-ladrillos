import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import numeral from 'numeral';

const StyledSidebarIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 15px 16px;
  border-bottom: 1px solid ${props => props.theme.colors.divider};
`;

const StyledLegend = styled.span`
  opacity: 0.66;
  color: ${props => props.theme.colors.black};
  font-size: 13px;
  font-family: 'Roboto Condensed', sans-serif;
  font-stretch: condensed;
  white-space: nowrap;
  line-height: 16px;
  margin-bottom: 8px;
`;

const StyledValue = styled(StyledLegend)`
  opacity: 1;
  font-size: 16px;
  margin-bottom: 0;
`;

function SidebarIndicator({ legend, value, ...rest }) {
  const formattedValue = numeral(value).format('$0,0');
  return (
    <StyledSidebarIndicator {...rest}>
      <StyledLegend>{legend}</StyledLegend>
      <StyledValue>{formattedValue}</StyledValue>
    </StyledSidebarIndicator>
  );
}

SidebarIndicator.propTypes = {
  legend: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default SidebarIndicator;

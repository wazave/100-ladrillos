import React from 'react';
import styled from 'styled-components';

const StyledSeparator = styled.span`
  background: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.white};
  font-size: 24px;
  font-weight: 600;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;
  border-radius: 16px;
`;

function Separator({ children, ...props }) {
  return <StyledSeparator {...props}>+</StyledSeparator>;
}

export default Separator;

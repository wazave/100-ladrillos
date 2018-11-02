import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.theme.colors.primary};
  outline: none;
  font-size: 16px;
  font-family: 'Roboto Condensed', sans-serif;
  font-stretch: condensed;
  font-weight: 600;
  line-height: 40px;
  color: ${props => props.theme.colors.white};
  height: 40px;
  min-width: 64px;
  padding: 0 24px;
  border-radius: 20px;
  transition: ${props => props.theme.transitions.standard};
  cursor: pointer;

  &:hover {
    box-shadow: ${props => props.theme.elevations[2]};
  }
`;

export default StyledButton;

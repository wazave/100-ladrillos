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

  padding: 0 24px;
  border-radius: 20px;
`;

export default StyledButton;

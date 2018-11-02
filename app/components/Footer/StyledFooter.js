import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.white};
  min-height: 192px;
  width: 100%;
  margin: 0;

  border-top: 1px solid ${props => props.theme.colors.divider};
`;

export default StyledFooter;

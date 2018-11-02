import styled from 'styled-components';

const StyledUserbar = styled.div`
  background: ${props => props.theme.colors.white};
  min-height: 72px;
  width: 100%;
  margin: 0;

  border-bottom: 1px solid ${props => props.theme.colors.divider};
`;

export default StyledUserbar;

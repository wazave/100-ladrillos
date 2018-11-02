import styled from 'styled-components';

const StyledSidebar = styled.div`
  background: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  min-height: 100%;
  min-width: 120px;
`;

export default StyledSidebar;

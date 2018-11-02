import styled from 'styled-components';

const HomePageWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  display: flex;

  min-height: 100vh;
  width: 100%;
`;

export default HomePageWrapper;

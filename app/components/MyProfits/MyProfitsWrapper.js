import styled from 'styled-components';

const MyProfitsWrapper = styled.div`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.divider};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 8px;
  overflow: hidden;
`;

export default MyProfitsWrapper;

import styled from 'styled-components';

const AccountValueWrapper = styled.div`
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgba(170, 170, 170, 0.2),
    0 2px 2px 0 rgba(170, 170, 170, 0.12), 0 0 2px 0 rgba(170, 170, 170, 0.14);
  height: 96px;
  width: 100%;
  margin-bottom: 24px;
`;

export default AccountValueWrapper;

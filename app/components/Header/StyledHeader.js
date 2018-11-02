import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: ${props => props.theme.colors.black};
  font-size: 24px;
  font-family: 'Roboto Condensed', sans-serif;
  font-stretch: condensed;
  font-weight: ${({ slim }) => (slim ? 400 : 600)};
  line-height: 36px;
  margin: 0;
`;

export default StyledHeader;

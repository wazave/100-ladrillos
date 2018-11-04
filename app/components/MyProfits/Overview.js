import React from 'react';
import styled from 'styled-components';

const OverviewWrapper = styled.div`
  background: ${props => props.theme.colors.white};
  border-right: 1px solid ${props => props.theme.colors.divider};
  display: flex;
  flex-direction: column;
  padding: 0 8px;
`;

function Overview(props) {
  return <OverviewWrapper {...props} />;
}

export default Overview;

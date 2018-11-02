import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSidebarButton = styled.div`
  box-shadow: ${({ active, theme }) =>
    active ? theme.shadows.inset : theme.none};
  background: ${({ active, theme }) =>
    active ? theme.colors.background : theme.inherit};
  border-left-color: ${({ active, theme: { colors } }) =>
    active ? colors.primary : colors.white};
  border-left-width: 4px;
  border-left-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 16px 10px 12px;
  height: 72px;
  cursor: pointer;
  transition: ${props => props.theme.transitions.standard};

  &:hover {
    background: ${props => props.theme.colors.background};
    border-left-color: ${/* eslint-disable */ ({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.gray /* eslint-enable */};
  }
`;

const StyledText = styled.span`
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.black};
  font-size: 13px;
  font-family: 'Roboto Condensed', sans-serif;
  font-stretch: condensed;
  line-height: 16px;
`;

const StyledIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 32px;
  margin-bottom: 4px;
`;

const StyledIcon = styled.img`
  width: 100%;
  height: auto;
`;

function SidebarButton({ active, icon, text, ...rest }) {
  return (
    <StyledSidebarButton active={active} {...rest}>
      <StyledIconContainer>
        <StyledIcon src={icon} />
      </StyledIconContainer>
      <StyledText active={active}>{text}</StyledText>
    </StyledSidebarButton>
  );
}

SidebarButton.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

SidebarButton.defaultProps = {
  active: false,
};

export default SidebarButton;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import numeral from 'numeral';

const StyledOverviewDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 96px;
  min-width: 170px;
  border-bottom: 1px solid
    ${({ theme, separator } /* eslint-disable */) =>
    separator ? theme.colors.divider : theme.colors.white}; /* eslint-enable */
  position: relative;
  padding: 0 16px;
`;

const StyledValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const StyledLegend = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: 14px;
  font-family: 'Roboto Condensed', sans-serif;
  font-stretch: condensed;
  line-height: 14px;
  margin: 0;
  margin-bottom: 4px;
`;

const StyledValue = styled(StyledLegend)`
  color: ${props => props.theme.colors.black};
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  margin: 0;
`;

const StyledIcon = styled.img`
  margin-right: 16px;
`;

const StyledSeparator = styled.span`
  background: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.white};
  font-size: 24px;
  font-weight: 600;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  min-width: 28px;
  width: 28px;
  border-radius: 16px;
`;

const StyledSeparatorContainer = styled.div`
  position: absolute;
  bottom: -14px;
  left: calc(50% - 22px);
  padding: 0 8px;
  background: ${props => props.theme.colors.white};
`;

function OverviewDetail({ icon, legend, separator, value, ...rest }) {
  const formattedValue = numeral(value).format('$0,0');
  return (
    <StyledOverviewDetail separator={separator} {...rest}>
      <StyledIcon src={icon} />
      <StyledValuesWrapper>
        <StyledLegend>{legend}</StyledLegend>
        <StyledValue>{formattedValue}</StyledValue>
      </StyledValuesWrapper>
      {separator && (
        <StyledSeparatorContainer>
          <StyledSeparator>+</StyledSeparator>
        </StyledSeparatorContainer>
      )}
    </StyledOverviewDetail>
  );
}

OverviewDetail.propTypes = {
  bottomDivider: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  separator: PropTypes.bool,
  value: PropTypes.number,
};

export default OverviewDetail;

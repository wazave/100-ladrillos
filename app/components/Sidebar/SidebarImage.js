import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const StyledImageContainer = styled.div`
  height: 72px;
  padding: 16px 16px 15px 16px;
  border-bottom: 1px solid ${props => props.theme.colors.divider};
`;

function SidebarImage({ src, alt, ...rest }) {
  return (
    <StyledImageContainer {...rest}>
      <StyledImage src={src} alt={alt} />
    </StyledImageContainer>
  );
}

SidebarImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

SidebarImage.defaultProps = {
  alt: '100 Ladrillos logo',
};

export default SidebarImage;

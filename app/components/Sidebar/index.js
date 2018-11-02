/**
 *
 * Sidebar
 *
 */

import React from 'react';

import StyledSidebar from './StyledSidebar';
import Indicator from './SidebarIndicator';
import Image from './SidebarImage';
import Button from './SidebarButton';

function Sidebar(props) {
  return <StyledSidebar {...props} />;
}

Sidebar.propTypes = {};

Sidebar.Indicator = Indicator;
Sidebar.Image = Image;
Sidebar.Button = Button;

export default Sidebar;

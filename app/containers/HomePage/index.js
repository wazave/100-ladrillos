/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import { Switch, Route, Redirect } from 'react-router-dom';

import Section from 'components/Section';
import Userbar from 'components/Userbar';
import Footer from 'components/Footer';

import BuyContainer from 'containers/BuyContainer';
import MyAccountContainer from 'containers/MyAccountContainer';
import SidebarContainer from 'containers/SidebarContainer';

import HomePageWrapper from './HomePageWrapper';
import ContentWrapper from './ContentWrapper';

/* eslint-disable react/prefer-stateless-function */
export default injectIntl(
  class HomePage extends React.PureComponent {
    render() {
      return (
        <HomePageWrapper>
          <SidebarContainer />
          <ContentWrapper>
            <Userbar />
            <Section>
              <Switch>
                <Redirect exact from="/" to="/my-account" />
                <Route path="/my-account" component={MyAccountContainer} />
                <Route path="/buy" component={BuyContainer} />
                <Redirect to="/404" />
              </Switch>
            </Section>
            <Footer />
          </ContentWrapper>
        </HomePageWrapper>
      );
    }
  },
);

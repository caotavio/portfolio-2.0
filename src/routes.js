import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={FeaturedProjects} path="/featured-projects" />
      <Route component={Contact} path="/contact" />
    </BrowserRouter>
  )
}

export default Routes;
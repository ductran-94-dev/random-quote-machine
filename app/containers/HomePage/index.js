/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import Quote from 'containers/Quote';

export function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Random Quote Machine" />
      </Helmet>
      <Quote />
    </article>
  );
}

export default HomePage;

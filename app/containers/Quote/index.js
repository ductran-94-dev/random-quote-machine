/**
 *
 * Quote
 *
 */

import QuoteCard from 'components/QuoteCard';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { loadQuotes } from 'containers/App/actions';
import { makeSelectQuotes } from 'containers/App/selectors';
import Footer from 'components/Footer';

import Wrapper from './Wrapper';
import reducer from './reducer';
import saga from './saga';

export function Quote({ onLoadQuotes, quotes }) {
  useInjectReducer({ key: 'quote', reducer });
  useInjectSaga({ key: 'quote', saga });

  const [randomQuote, setRandomQuote] = useState({
    quote: '',
    author: '',
  });

  const getRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

  const getQuote = () => {
    const newQuote = getRandomQuote();

    setRandomQuote(newQuote);
  };

  useEffect(() => {
    if (Array.isArray(quotes)) {
      getQuote();
    }
  }, [quotes]);

  useEffect(() => {
    onLoadQuotes();
  }, []);

  return (
    <Wrapper>
      <QuoteCard {...randomQuote} />
      <Footer {...randomQuote} onNewQuote={getQuote} />
    </Wrapper>
  );
}

Quote.propTypes = {
  quotes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  onLoadQuotes: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  quotes: makeSelectQuotes(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadQuotes: () => {
      dispatch(loadQuotes());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Quote);

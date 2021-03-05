import React from 'react';
import PropTypes from 'prop-types';

import Subtitle from './Subtitle';
import Text from './Text';
import Wrapper from './Wrapper';

function QuoteCard({ quote, author }) {
  return (
    <Wrapper>
      <Text>{quote}</Text>
      <Subtitle>-- {author}</Subtitle>
    </Wrapper>
  );
}

QuoteCard.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
};

export default QuoteCard;

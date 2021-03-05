import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Wrapper from './Wrapper';

function Footer({ onNewQuote, quote, author }) {
  const openURL = url => {
    window.open(
      url,
      'Share',
      'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0',
    );
  };

  const quoteEncode = encodeURIComponent(quote);
  const authorEncode = encodeURIComponent(author);
  const tweetEncode = encodeURIComponent(`${quote} ${author}`);

  const onShareTweet = () =>
    openURL(`
      https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${tweetEncode}`);

  const onShareTumblr = () =>
    openURL(
      `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${authorEncode}&content=${quoteEncode}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`,
    );

  return (
    <Wrapper>
      <div>
        <span>Share:</span>
        <Button onClick={onShareTweet}>Twitter</Button>
        <Button onClick={onShareTumblr}>Tumblr</Button>
      </div>
      <Button onClick={onNewQuote}>New Quote</Button>
    </Wrapper>
  );
}

Footer.propTypes = {
  onNewQuote: PropTypes.func,
  author: PropTypes.string,
  quote: PropTypes.string,
};

export default Footer;

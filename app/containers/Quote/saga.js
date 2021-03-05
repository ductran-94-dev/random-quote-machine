import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_QUOTES } from 'containers/App/constants';
import { quotesLoaded, quotesLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getQuotes() {
  const requestURL = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

  try {
    const quotes = yield call(request, requestURL);
    yield put(quotesLoaded(quotes));
  } catch (err) {
    yield put(quotesLoadingError(err));
  }
}

export default function* quoteSaga() {
  yield takeLatest(LOAD_QUOTES, getQuotes);
}

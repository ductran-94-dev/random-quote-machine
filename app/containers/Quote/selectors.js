import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the quote state domain
 */

const selectQuoteDomain = state => state.quote || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Quote
 */

const makeSelectQuotes = () =>
  createSelector(
    selectQuoteDomain,
    substate => substate,
  );

export default makeSelectQuotes;
export { selectQuoteDomain };

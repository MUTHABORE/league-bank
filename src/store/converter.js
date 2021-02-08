import {extend} from '../util/utils';
import {ActionType} from './actions';

const initialState = {
  exchangeRates: 10,
  // exchangeRates: chosenExchangeRates,
  // firstCurrencyType: CURRENCY_TYPES.RUB,
  // secoundCurrencyType: CURRENCY_TYPES.USD,
  // firstCurrencyValue: ``,
  // secoundCurrencyValue: ``,
};

const converter = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_EXCHANGE_RATES:
      return extend(state, {
        exchangeRates: action.payload,
      });
    };
  return state;
}

export {converter};

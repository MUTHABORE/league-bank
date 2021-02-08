export const ActionType = {
  CHANGE_EXCHANGE_RATES: `CHANGE_EXCHANGE_RATES`,
  CHANGE_DATE: `CHANGE_DATE`,
  CLEAR_HISTORY: `CLEAR_HISTORY`,
  SAVE_CONVERTATION: `SAVE_CONVERTATION`,
};

export const changeExchangeRates = (exchangeRates) => ({
  type: ActionType.CHANGE_EXCHANGE_RATES,
  payload: exchangeRates,
})

export const changeDate = (chosenDate) => ({
  type: ActionType.CHANGE_DATE,
  payload: chosenDate,
});

export const clearHistory = (history) => ({
  type: ActionType.CLEAR_HISTORY,
  payload: history,
});

export const saveConvertation = (convertation) => ({
  type: ActionType.SAVE_CONVERTATION,
  payload: convertation,
});

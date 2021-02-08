import moment from 'moment';
import {extend} from '../util/utils';
import {ActionType} from './actions';

const initialState = {
  chosenDate: moment().format(`YYYY-MM-DD`),
  convertationHistory: [],
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_DATE:
      return extend(state, {
        chosenDate: action.payload,
      });
    case ActionType.SAVE_CONVERTATION:
      return extend(state, {
        convertationHistory: convertationHistory.push(action.payload),
      });
    };
  return state;
}

export {history};

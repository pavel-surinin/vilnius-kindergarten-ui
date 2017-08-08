import { Reducer, combineReducers } from 'redux';
import { Kindergarten } from '../components/ContentComponent/ContentComponent';
import { GardenStore } from './store';
import { ActionGardenLabelType, ActionReducerType } from './actions';

export const gardensReducer: Reducer<Kindergarten[]> =
  (state = [], action: ActionGardenLabelType) => {
    if (action.type === 'CHANGE_LABEL') {
      const garden = state.find(g => g.id === action.id);
      if (garden) {
        garden.label = action.label;
      }
    }
    return state;
};

export const tttReducer: Reducer<number> = (state = 0, action: ActionReducerType) => {
  state = state + action.TTT;
  return state;
};

// type is must
export const reducers: Reducer<GardenStore> = combineReducers({
  gardens: gardensReducer,
  TTT: tttReducer
});

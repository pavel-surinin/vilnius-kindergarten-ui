import { AnyAction } from 'redux';
import { store } from './store';

export interface ActionReducerType extends AnyAction {
  TTT: number;
}

export interface ActionGardenLabelType extends AnyAction {
  id: number;
  label: string;
}

export const changeNameAction = (params: {id: number, label: string}): void => {
  const action: ActionGardenLabelType = {type: 'CHANGE_LABEL', id: params.id, label: params.label};
  store.dispatch(action);
};

import { createStore, Store } from 'redux';
import { Kindergarten } from '../components/ContentComponent/ContentComponent';
import { reducers } from './reducers';

export interface GardenStore {
  gardens: Kindergarten[];
  TTT: number;
}

export const MOCK_GARDEN: Kindergarten = {
    id: 1,
    label: 'string',
    address: 'string',
    buildDate: 1201355534609,
    elderate: 'string',
    email: 'string',
    phone: 'string',
    schoolType: 'string',
    www: 'string',
    idFromSource: 2
};

// not nescesary to define store type, but must define reducers type
export const store: Store<GardenStore> = createStore(
  reducers,
  {
    gardens: [MOCK_GARDEN],
    TTT: 0
  });

console.log(store.getState().gardens[0]);
store.dispatch({type: 'DEC', TTT: 12});
store.dispatch({type: 'INC', TTT: 2});
store.dispatch({type: 'INC', TTT: 5});
store.dispatch({type: 'INC', TTT: 2});
store.dispatch({type: 'INC', TTT: 7});
store.dispatch({type: 'CHANGE_LABEL', id: 1, label: 'Boruzele'});
console.log(store.getState().gardens[0]);

// @flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const commonReducers: any = {};

export function configureRootReducer(asyncTopReducers: any) {
  let topReducers = {
    form: formReducer,
    ...commonReducers,
    ...asyncTopReducers,
  };

  return combineReducers(topReducers);
}


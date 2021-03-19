// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
    initCombineSaga,
} from 'src/utils/combine-saga';
import {
    initCombineSliceReducer,
} from 'src/utils/combine-slice-reducer';

import { configureRootReducer } from './configure-root-reducer';

export function configureStore(
    initialState: any
) {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware,
    ];

    const enhancers = [applyMiddleware(...middlewares)];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    /* eslint-enable */

    console.log(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

    const store = createStore(
        configureRootReducer(),
        initialState,
        composeEnhancers(...enhancers)
    );

    store.asyncReducers = {};

    store.sagaMiddleware = sagaMiddleware;

    initCombineSaga(sagaMiddleware);
    initCombineSliceReducer(store, configureRootReducer);

    return store;
}
// @flow
import { createAndCombineSliceReducer } from 'src/utils';

export const sliceName = 'testSlice';

export type testSlice = {
    isLoading: boolean,
    data: Array<Object>
};

const initialState: testSlice = {
    isLoading: false,
    data : []
};

export const testReducer = createAndCombineSliceReducer(
    sliceName,
    initialState
);

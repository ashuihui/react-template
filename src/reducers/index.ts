import { combineReducers } from 'redux';
import { ReturnState } from 'iron-redux';
import userReduce from './user';

const reducers = {
	user: userReduce,
};
export const rootReducer = combineReducers(reducers);

export type RootState = ReturnState<typeof reducers>;

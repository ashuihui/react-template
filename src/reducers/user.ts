import { ActionType, AsyncTuple } from 'iron-redux';
import { baseActions, baseTypes } from '@actions/index';

const initialState: {
	user: any;
} = {
	user: null,
};

const user = (state = initialState, action: ActionType<typeof baseActions>) => {
	switch (action.type) {
		case baseTypes.getUser.loading: {
			return AsyncTuple.handleLoading('user', state);
		}
		case baseTypes.getUser.success: {
			return AsyncTuple.handleSuccess('user', state, action);
		}
		case baseTypes.getUser.error: {
			return AsyncTuple.handleError('user', state, action);
		}
		default: {
			return state;
		}
	}
};
export default user;

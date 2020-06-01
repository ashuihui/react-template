import { composeTypes, createFetchAction, Method } from 'iron-redux';
enum BasicTypes {}
enum FetchTypes {
	getUser,
}

export const baseTypes = composeTypes({
	prefix: 'index/',
	BasicTypes,
	FetchTypes,
});

export const baseActions = {
	getUser: createFetchAction(
		baseTypes.getUser,
		'/user',
		Method.Get
	)<
		{ [prop: string]: any },
		{
			code: string;
			data: { name: string };
		}
	>('user'),
};

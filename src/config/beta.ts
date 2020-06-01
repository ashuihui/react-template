export class Beta {
	static host = '';
	static loginHost = '';
	static mockHost = '';
	static debugHost = [];
	static isMock = process.env.NODE_ENV === 'mock';
	static mockIgnoreUrl = [];
}

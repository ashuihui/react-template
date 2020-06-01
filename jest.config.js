module.exports = {
	//目录
	roots: ['<rootDir>'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	},
	//指定需要进行单元测试的文件匹配规则
	testMatch: ['<rootDir>/test/**/*.{spec,test}.{js,jsx,ts,tsx}'],
	// 是否收集测试覆盖率，以及覆盖率文件路径
	collectCoverage: true,

	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/!src/**/*.d.ts',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@common/(.*)$': '<rootDir>/src/common/$1',
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@containers/(.*)$': '<rootDir>/src/containers/$1',
		'^@reducers/(.*)$': '<rootDir>/src/reducers/$1',
		'^@actions/(.*)$': '<rootDir>/src/actions/$1',
		'^.+\\m\\.(css|sass|scss)$': 'identity-obj-proxy',
	},

	// 需要忽略的文件匹配规则
	transformIgnorePatterns: [
		'[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
		'^.+\\.m.(css|sass|scss)$',
	],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupFilesAfterEnv: ['<rootDir>/scripts/jest/setup.js'],
	coverageDirectory: '<rootDir>/test/result',
};

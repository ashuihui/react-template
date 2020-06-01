import Example from './mock';

// 接口代理
const proxy = {
	'GET /api/user/': Example.user,
};
export default proxy;

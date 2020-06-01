import Mock from 'mockjs';

const Example = {
	user: (req, res) => {
		let data = Mock.mock({
			data: {
				name: 'test',
			},
		});
		res.send({
			code: 0,
			msg: '查询成功',
			success: true,
			data: data.data,
		});
	},
};
export default Example;

import Numeral from 'numeral';
export default {
	formatAmount: (value: number | string, accuracy: number = 2): string => {
		return Numeral(value).format('0,0.00');
	},
};

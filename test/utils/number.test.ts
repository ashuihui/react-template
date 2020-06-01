import format from '@utils/number-format';
describe('format-data', () => {
	it('val amount', () => {
		const result = format.formatAmount(1);
		expect(result).toBe('1.00');
	});
});

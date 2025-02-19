const applyDiscountFunction = require('../../src/CashCalculationFunctions/applyDiscountFunction');

describe('apply Discount Function unit test', () => {
    test('applies discount correctly for typical values', () => {
        const total = 100;
        const discountPercentage = 20;
        expect(applyDiscountFunction(total, discountPercentage)).toBeCloseTo(80);
    });

    test('same total if discount is 0%', () => {
        expect(applyDiscountFunction(50, 0)).toBe(50);
    });

    test('0$ if discount is 100%', () => {
        expect(applyDiscountFunction(50, 100)).toBe(0);
    });
    test('Purposely Failing Test', () => {
        expect(applyDiscountFunction(50, 100)).toBe(50);
    });

    test('throws an error when discount percentage is greater than 100', () => {
        expect(() => applyDiscountFunction(100, 110)).toThrow("Invalid discount");
    });

    test('throws an error when discount percentage is less than 0', () => {
        expect(() => applyDiscountFunction(100, -10)).toThrow("Invalid discount");
    });
});

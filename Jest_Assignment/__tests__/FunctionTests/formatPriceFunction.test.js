
const formatPriceFunction = require('../../src/CashCalculationFunctions/formatPriceFunction');

describe('formatPriceFunction', () => {
    test('formats the price to two decimal places', () => {
        expect(formatPriceFunction(2.5)).toBe("$2.50");
        expect(formatPriceFunction(2)).toBe("$2.00");
    });

    test('rounds the price correctly', () => {
        expect(formatPriceFunction(2.345)).toBe("$2.35");
    });

    test('handles zero correctly', () => {
        expect(formatPriceFunction(0)).toBe("$0.00");
    });

    test('formats negative amounts appropriately', () => {
        expect(formatPriceFunction(-3.1)).toBe("$-3.10");
    });
});

const calculateTotalFunction = require('../../src/CashCalculationFunctions/calculateTotalFunction');

describe('calculate Total Function unit test', () => {
    test('calculates the total for a typical array of items', () => {
        const items = [
            { price: 10, quantity: 2 },
            { price: 5, quantity: 3 }
        ];
        expect(calculateTotalFunction(items)).toBe(35);
    });

    test('returns 0 for an empty array', () => {
        expect(calculateTotalFunction([])).toBe(0);
    });

    test('handles items with zero price or quantity', () => {
        const items = [
            { price: 10, quantity: 0 },
            { price: 0, quantity: 5 }
        ];
        expect(calculateTotalFunction(items)).toBe(0);
    });
});

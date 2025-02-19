function formatPriceFunction(amount) {
    return `$${amount.toFixed(2)}`;
}

module.exports = formatPriceFunction;

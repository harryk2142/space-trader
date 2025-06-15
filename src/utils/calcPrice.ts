export const calcPrice = (
    base: number,
    stock: number,
    demand: number,
): number => {
    const factor = 1 + (demand - stock) / 100;
    return Math.max(1, Math.round(base * factor));
    // return Math.round(base * (1 + (demand - stock) / 100));
};

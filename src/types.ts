export type Resource = "eisenerz" | "wasser" | "energiezellen";

export type Station = {
    id: string;
    name: string;
    stock: Record<Resource, number>;
    demand: Record<Resource, number>;
    basePrices: Record<Resource, number>;
};

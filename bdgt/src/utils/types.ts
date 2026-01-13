export const costTypes = [
  "subscriptions",
  "utilities",
  "insurance",
  "fees",
  "debts",
  "car"
];

export type CostType = typeof costTypes[number];

export type TableEntry = {
  id: string;
  title: string;
  type?: string;
  sum: number;
  date?: number;
};
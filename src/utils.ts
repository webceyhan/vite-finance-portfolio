import { Holding } from './api';

export const msToDatetime = (ms: number) =>
    new Date(ms).toISOString().slice(0, 16);

export const datetimeToMs = (dt: string) => new Date(dt).getTime();

export const formatTimestamp = (timestamp: number) =>
    new Date(timestamp).toLocaleString('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

export const formatCurrency = (value: number) =>
    new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    }).format(value);

export const priceColor = (price: number) => {
    if (price > 0) return 'text-success';
    if (price < 0) return 'text-danger';
    return '';
};

export const getAvgPrice = ({ cost, amount }: Holding) => cost / amount;
export const getBalance = ({ price, amount }: Holding) => price * amount;
export const getProfit = (h: Holding) => getBalance(h) - h.cost;
export const getProfitPercent = (h: Holding) =>
    ((getProfit(h) / h.cost) * 100).toFixed(2).concat('%');

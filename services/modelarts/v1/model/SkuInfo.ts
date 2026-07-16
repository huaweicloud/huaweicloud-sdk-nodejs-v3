

export class SkuInfo {
    public code?: string;
    public period?: string;
    private 'queries_limit'?: number;
    public price?: number;
    public constructor() { 
    }
    public withCode(code: string): SkuInfo {
        this['code'] = code;
        return this;
    }
    public withPeriod(period: string): SkuInfo {
        this['period'] = period;
        return this;
    }
    public withQueriesLimit(queriesLimit: number): SkuInfo {
        this['queries_limit'] = queriesLimit;
        return this;
    }
    public set queriesLimit(queriesLimit: number  | undefined) {
        this['queries_limit'] = queriesLimit;
    }
    public get queriesLimit(): number | undefined {
        return this['queries_limit'];
    }
    public withPrice(price: number): SkuInfo {
        this['price'] = price;
        return this;
    }
}
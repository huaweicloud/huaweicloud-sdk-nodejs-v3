

export class StatisticSchema {
    public increase?: number;
    public total?: number;
    private 'standard_coverage'?: number;
    public constructor() { 
    }
    public withIncrease(increase: number): StatisticSchema {
        this['increase'] = increase;
        return this;
    }
    public withTotal(total: number): StatisticSchema {
        this['total'] = total;
        return this;
    }
    public withStandardCoverage(standardCoverage: number): StatisticSchema {
        this['standard_coverage'] = standardCoverage;
        return this;
    }
    public set standardCoverage(standardCoverage: number  | undefined) {
        this['standard_coverage'] = standardCoverage;
    }
    public get standardCoverage(): number | undefined {
        return this['standard_coverage'];
    }
}
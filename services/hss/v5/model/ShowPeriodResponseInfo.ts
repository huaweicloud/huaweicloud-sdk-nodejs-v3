

export class ShowPeriodResponseInfo {
    private 'period_vals'?: string;
    private 'period_unit'?: string;
    public constructor() { 
    }
    public withPeriodVals(periodVals: string): ShowPeriodResponseInfo {
        this['period_vals'] = periodVals;
        return this;
    }
    public set periodVals(periodVals: string  | undefined) {
        this['period_vals'] = periodVals;
    }
    public get periodVals(): string | undefined {
        return this['period_vals'];
    }
    public withPeriodUnit(periodUnit: string): ShowPeriodResponseInfo {
        this['period_unit'] = periodUnit;
        return this;
    }
    public set periodUnit(periodUnit: string  | undefined) {
        this['period_unit'] = periodUnit;
    }
    public get periodUnit(): string | undefined {
        return this['period_unit'];
    }
}
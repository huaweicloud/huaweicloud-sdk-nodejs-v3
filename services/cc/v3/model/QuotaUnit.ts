

export class QuotaUnit {
    public unit?: string;
    public constructor(unit?: string) { 
        this['unit'] = unit;
    }
    public withUnit(unit: string): QuotaUnit {
        this['unit'] = unit;
        return this;
    }
}


export class RateLimit {
    public num?: number;
    public unit?: string;
    public constructor(num?: number, unit?: string) { 
        this['num'] = num;
        this['unit'] = unit;
    }
    public withNum(num: number): RateLimit {
        this['num'] = num;
        return this;
    }
    public withUnit(unit: string): RateLimit {
        this['unit'] = unit;
        return this;
    }
}
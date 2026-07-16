

export class RateLimitResponse {
    public num?: number;
    public unit?: string;
    public constructor(num?: number, unit?: string) { 
        this['num'] = num;
        this['unit'] = unit;
    }
    public withNum(num: number): RateLimitResponse {
        this['num'] = num;
        return this;
    }
    public withUnit(unit: string): RateLimitResponse {
        this['unit'] = unit;
        return this;
    }
}
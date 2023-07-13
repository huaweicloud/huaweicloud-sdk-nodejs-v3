

export class Resources {
    public unit?: string;
    public min?: number;
    public max?: number;
    public quota?: number;
    public used?: number;
    public type?: string;
    public constructor() { 
    }
    public withUnit(unit: string): Resources {
        this['unit'] = unit;
        return this;
    }
    public withMin(min: number): Resources {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): Resources {
        this['max'] = max;
        return this;
    }
    public withQuota(quota: number): Resources {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): Resources {
        this['used'] = used;
        return this;
    }
    public withType(type: string): Resources {
        this['type'] = type;
        return this;
    }
}
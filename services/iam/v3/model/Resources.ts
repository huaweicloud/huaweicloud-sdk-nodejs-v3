

export class Resources {
    public max?: number;
    public min?: number;
    public quota?: number;
    public type?: string;
    public used?: number;
    public constructor() { 
    }
    public withMax(max: number): Resources {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): Resources {
        this['min'] = min;
        return this;
    }
    public withQuota(quota: number): Resources {
        this['quota'] = quota;
        return this;
    }
    public withType(type: string): Resources {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): Resources {
        this['used'] = used;
        return this;
    }
}
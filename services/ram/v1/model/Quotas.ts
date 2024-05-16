

export class Quotas {
    public type?: string;
    public quota?: number;
    public min?: number;
    public max?: number;
    public used?: number;
    public constructor(type?: string, quota?: number, min?: number, max?: number, used?: number) { 
        this['type'] = type;
        this['quota'] = quota;
        this['min'] = min;
        this['max'] = max;
        this['used'] = used;
    }
    public withType(type: string): Quotas {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): Quotas {
        this['quota'] = quota;
        return this;
    }
    public withMin(min: number): Quotas {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): Quotas {
        this['max'] = max;
        return this;
    }
    public withUsed(used: number): Quotas {
        this['used'] = used;
        return this;
    }
}
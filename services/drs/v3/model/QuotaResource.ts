

export class QuotaResource {
    public type?: string;
    public min?: number;
    public max?: number;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withType(type: string): QuotaResource {
        this['type'] = type;
        return this;
    }
    public withMin(min: number): QuotaResource {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): QuotaResource {
        this['max'] = max;
        return this;
    }
    public withQuota(quota: number): QuotaResource {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): QuotaResource {
        this['used'] = used;
        return this;
    }
}
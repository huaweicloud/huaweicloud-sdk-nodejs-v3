

export class QuotaOuterResource {
    public type?: string;
    public min?: number;
    public max?: number;
    public quota?: number;
    public constructor() { 
    }
    public withType(type: string): QuotaOuterResource {
        this['type'] = type;
        return this;
    }
    public withMin(min: number): QuotaOuterResource {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): QuotaOuterResource {
        this['max'] = max;
        return this;
    }
    public withQuota(quota: number): QuotaOuterResource {
        this['quota'] = quota;
        return this;
    }
}
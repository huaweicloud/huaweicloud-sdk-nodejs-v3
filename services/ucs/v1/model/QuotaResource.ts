

export class QuotaResource {
    public type?: string;
    public quota?: string;
    public used?: string;
    public unit?: string;
    public min?: string;
    public max?: string;
    public constructor() { 
    }
    public withType(type: string): QuotaResource {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: string): QuotaResource {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: string): QuotaResource {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): QuotaResource {
        this['unit'] = unit;
        return this;
    }
    public withMin(min: string): QuotaResource {
        this['min'] = min;
        return this;
    }
    public withMax(max: string): QuotaResource {
        this['max'] = max;
        return this;
    }
}
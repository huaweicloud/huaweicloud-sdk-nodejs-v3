

export class QuotaInfo {
    public type?: string;
    public min?: number;
    public max?: number;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withType(type: string): QuotaInfo {
        this['type'] = type;
        return this;
    }
    public withMin(min: number): QuotaInfo {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): QuotaInfo {
        this['max'] = max;
        return this;
    }
    public withQuota(quota: number): QuotaInfo {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): QuotaInfo {
        this['used'] = used;
        return this;
    }
}
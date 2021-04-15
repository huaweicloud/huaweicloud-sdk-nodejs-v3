

export class QuotaInfo {
    public type: string;
    public used: number;
    public quota: number;
    public min: number;
    public max: number;
    public constructor(type?: any, used?: any, quota?: any, min?: any, max?: any) { 
        this['type'] = type;
        this['used'] = used;
        this['quota'] = quota;
        this['min'] = min;
        this['max'] = max;
    }
    public withType(type: string): QuotaInfo {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): QuotaInfo {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): QuotaInfo {
        this['quota'] = quota;
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
}
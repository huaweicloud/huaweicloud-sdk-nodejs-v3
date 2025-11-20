

export class QuotaObject {
    public type?: string;
    public quota?: number;
    public used?: number;
    public min?: number;
    public max?: number;
    public constructor(type?: string, quota?: number, used?: number, min?: number, max?: number) { 
        this['type'] = type;
        this['quota'] = quota;
        this['used'] = used;
        this['min'] = min;
        this['max'] = max;
    }
    public withType(type: string): QuotaObject {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): QuotaObject {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): QuotaObject {
        this['used'] = used;
        return this;
    }
    public withMin(min: number): QuotaObject {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): QuotaObject {
        this['max'] = max;
        return this;
    }
}
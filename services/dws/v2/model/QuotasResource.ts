

export class QuotasResource {
    public type: string;
    public used: string;
    public quota: number;
    public unit: number;
    public constructor(type?: any, used?: any, quota?: any, unit?: any) { 
        this['type'] = type;
        this['used'] = used;
        this['quota'] = quota;
        this['unit'] = unit;
    }
    public withType(type: string): QuotasResource {
        this['type'] = type;
        return this;
    }
    public withUsed(used: string): QuotasResource {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): QuotasResource {
        this['quota'] = quota;
        return this;
    }
    public withUnit(unit: number): QuotasResource {
        this['unit'] = unit;
        return this;
    }
}
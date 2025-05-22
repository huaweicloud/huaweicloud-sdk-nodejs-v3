

export class QuotasResource {
    public type?: string;
    public used?: number;
    public quota?: number;
    public unit?: string;
    public constructor(type?: string, used?: number, quota?: number, unit?: string) { 
        this['type'] = type;
        this['used'] = used;
        this['quota'] = quota;
        this['unit'] = unit;
    }
    public withType(type: string): QuotasResource {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): QuotasResource {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): QuotasResource {
        this['quota'] = quota;
        return this;
    }
    public withUnit(unit: string): QuotasResource {
        this['unit'] = unit;
        return this;
    }
}
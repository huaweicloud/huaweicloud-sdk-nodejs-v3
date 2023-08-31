

export class ResourceQuotas {
    public type?: string;
    public used?: number;
    public unit?: string;
    public quota?: number;
    public constructor(type?: string, used?: number, unit?: string, quota?: number) { 
        this['type'] = type;
        this['used'] = used;
        this['unit'] = unit;
        this['quota'] = quota;
    }
    public withType(type: string): ResourceQuotas {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): ResourceQuotas {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): ResourceQuotas {
        this['unit'] = unit;
        return this;
    }
    public withQuota(quota: number): ResourceQuotas {
        this['quota'] = quota;
        return this;
    }
}
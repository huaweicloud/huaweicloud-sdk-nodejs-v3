

export class ResourceQuotasResp {
    public type?: string;
    public used?: number;
    public unit?: string;
    public quota?: number;
    public min?: number;
    public max?: number;
    public constructor(type?: string, used?: number, unit?: string, quota?: number) { 
        this['type'] = type;
        this['used'] = used;
        this['unit'] = unit;
        this['quota'] = quota;
    }
    public withType(type: string): ResourceQuotasResp {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): ResourceQuotasResp {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): ResourceQuotasResp {
        this['unit'] = unit;
        return this;
    }
    public withQuota(quota: number): ResourceQuotasResp {
        this['quota'] = quota;
        return this;
    }
    public withMin(min: number): ResourceQuotasResp {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): ResourceQuotasResp {
        this['max'] = max;
        return this;
    }
}
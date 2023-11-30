

export class ShowQuotaPropertiesBody {
    public type?: string;
    public min?: number;
    public max?: number;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withType(type: string): ShowQuotaPropertiesBody {
        this['type'] = type;
        return this;
    }
    public withMin(min: number): ShowQuotaPropertiesBody {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): ShowQuotaPropertiesBody {
        this['max'] = max;
        return this;
    }
    public withQuota(quota: number): ShowQuotaPropertiesBody {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): ShowQuotaPropertiesBody {
        this['used'] = used;
        return this;
    }
}


export class EpQuotas {
    public quota: number;
    public type: string;
    public used: number;
    public constructor(quota?: any, type?: any, used?: any) { 
        this['quota'] = quota;
        this['type'] = type;
        this['used'] = used;
    }
    public withQuota(quota: number): EpQuotas {
        this['quota'] = quota;
        return this;
    }
    public withType(type: string): EpQuotas {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): EpQuotas {
        this['used'] = used;
        return this;
    }
}
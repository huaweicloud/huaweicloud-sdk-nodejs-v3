

export class Quotas {
    public type?: string;
    public used?: number;
    public quota?: number;
    public constructor() { 
    }
    public withType(type: string): Quotas {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): Quotas {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): Quotas {
        this['quota'] = quota;
        return this;
    }
}


export class QuotaResourceEntity {
    public type?: string;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withType(type: string): QuotaResourceEntity {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): QuotaResourceEntity {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): QuotaResourceEntity {
        this['used'] = used;
        return this;
    }
}
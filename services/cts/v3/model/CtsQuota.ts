

export class CtsQuota {
    public type?: string;
    public used?: number;
    public quota?: number;
    public constructor() { 
    }
    public withType(type: string): CtsQuota {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): CtsQuota {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): CtsQuota {
        this['quota'] = quota;
        return this;
    }
}
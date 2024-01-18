

export class Quota {
    public type?: string;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withType(type: string): Quota {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): Quota {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): Quota {
        this['used'] = used;
        return this;
    }
}
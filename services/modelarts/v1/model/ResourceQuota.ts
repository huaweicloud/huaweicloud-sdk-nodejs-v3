

export class ResourceQuota {
    public type?: string;
    public quota?: string;
    public used?: string;
    public constructor() { 
    }
    public withType(type: string): ResourceQuota {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: string): ResourceQuota {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: string): ResourceQuota {
        this['used'] = used;
        return this;
    }
}
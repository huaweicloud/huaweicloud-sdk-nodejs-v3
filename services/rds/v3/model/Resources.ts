

export class Resources {
    public quota?: number;
    public used?: number;
    public type?: string;
    public constructor() { 
    }
    public withQuota(quota: number): Resources {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): Resources {
        this['used'] = used;
        return this;
    }
    public withType(type: string): Resources {
        this['type'] = type;
        return this;
    }
}
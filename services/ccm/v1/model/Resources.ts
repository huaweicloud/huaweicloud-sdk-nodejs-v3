

export class Resources {
    public type?: string;
    public used?: number;
    public quota?: number;
    public constructor(type?: string, used?: number, quota?: number) { 
        this['type'] = type;
        this['used'] = used;
        this['quota'] = quota;
    }
    public withType(type: string): Resources {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): Resources {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): Resources {
        this['quota'] = quota;
        return this;
    }
}
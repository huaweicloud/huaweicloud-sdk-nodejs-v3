

export class Resource {
    public type?: string;
    public used?: number;
    public quota?: number;
    public min?: number;
    public constructor() { 
    }
    public withType(type: string): Resource {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): Resource {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): Resource {
        this['quota'] = quota;
        return this;
    }
    public withMin(min: number): Resource {
        this['min'] = min;
        return this;
    }
}
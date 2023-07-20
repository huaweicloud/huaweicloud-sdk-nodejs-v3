

export class PolicyInstanceResources {
    public type?: string;
    public used?: number;
    public quota?: number;
    public max?: number;
    public min?: number;
    public constructor() { 
    }
    public withType(type: string): PolicyInstanceResources {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): PolicyInstanceResources {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): PolicyInstanceResources {
        this['quota'] = quota;
        return this;
    }
    public withMax(max: number): PolicyInstanceResources {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): PolicyInstanceResources {
        this['min'] = min;
        return this;
    }
}


export class ResourcesInfo {
    public type?: string;
    public used?: number;
    public quota?: number;
    public min?: number;
    public constructor() { 
    }
    public withType(type: string): ResourcesInfo {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): ResourcesInfo {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): ResourcesInfo {
        this['quota'] = quota;
        return this;
    }
    public withMin(min: number): ResourcesInfo {
        this['min'] = min;
        return this;
    }
}
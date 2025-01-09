

export class SimpleResourceNoUsed {
    public type?: string;
    public quota?: number;
    public constructor() { 
    }
    public withType(type: string): SimpleResourceNoUsed {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): SimpleResourceNoUsed {
        this['quota'] = quota;
        return this;
    }
}
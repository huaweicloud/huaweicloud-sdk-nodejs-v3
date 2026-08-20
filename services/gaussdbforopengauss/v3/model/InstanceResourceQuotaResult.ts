

export class InstanceResourceQuotaResult {
    public type?: string;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withType(type: string): InstanceResourceQuotaResult {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): InstanceResourceQuotaResult {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): InstanceResourceQuotaResult {
        this['used'] = used;
        return this;
    }
}
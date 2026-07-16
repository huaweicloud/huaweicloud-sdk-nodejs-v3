

export class TrainingQuotaResponse {
    public resource?: string;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withResource(resource: string): TrainingQuotaResponse {
        this['resource'] = resource;
        return this;
    }
    public withQuota(quota: number): TrainingQuotaResponse {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): TrainingQuotaResponse {
        this['used'] = used;
        return this;
    }
}
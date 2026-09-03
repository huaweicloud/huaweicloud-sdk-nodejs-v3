

export class ModifyTrainingQuotaItem {
    public resource?: string;
    public quota?: number;
    public used?: number;
    private 'extra_info'?: string;
    public constructor(resource?: string, quota?: number) { 
        this['resource'] = resource;
        this['quota'] = quota;
    }
    public withResource(resource: string): ModifyTrainingQuotaItem {
        this['resource'] = resource;
        return this;
    }
    public withQuota(quota: number): ModifyTrainingQuotaItem {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): ModifyTrainingQuotaItem {
        this['used'] = used;
        return this;
    }
    public withExtraInfo(extraInfo: string): ModifyTrainingQuotaItem {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: string  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): string | undefined {
        return this['extra_info'];
    }
}
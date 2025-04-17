

export class QuotaResponseDdosQuota {
    public current?: number;
    public quota?: number;
    public constructor() { 
    }
    public withCurrent(current: number): QuotaResponseDdosQuota {
        this['current'] = current;
        return this;
    }
    public withQuota(quota: number): QuotaResponseDdosQuota {
        this['quota'] = quota;
        return this;
    }
}
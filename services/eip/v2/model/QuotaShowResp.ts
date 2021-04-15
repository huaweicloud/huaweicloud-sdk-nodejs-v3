

export class QuotaShowResp {
    public type?: string;
    public used?: number;
    public quota?: number;
    public min?: number;
    public constructor() { 
    }
    public withType(type: string): QuotaShowResp {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): QuotaShowResp {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): QuotaShowResp {
        this['quota'] = quota;
        return this;
    }
    public withMin(min: number): QuotaShowResp {
        this['min'] = min;
        return this;
    }
}
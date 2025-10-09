

export class ClusterQuotaResource {
    public type?: string;
    public quota?: number;
    public used?: number;
    public unit?: string;
    public min?: number;
    public max?: number;
    public constructor() { 
    }
    public withType(type: string): ClusterQuotaResource {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): ClusterQuotaResource {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): ClusterQuotaResource {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): ClusterQuotaResource {
        this['unit'] = unit;
        return this;
    }
    public withMin(min: number): ClusterQuotaResource {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): ClusterQuotaResource {
        this['max'] = max;
        return this;
    }
}
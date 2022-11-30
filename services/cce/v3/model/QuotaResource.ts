

export class QuotaResource {
    public quotaKey?: string;
    public quotaLimit?: number;
    public used?: number;
    public unit?: string;
    public regionId?: string;
    public availabilityZoneId?: string;
    public constructor() { 
    }
    public withQuotaKey(quotaKey: string): QuotaResource {
        this['quotaKey'] = quotaKey;
        return this;
    }
    public withQuotaLimit(quotaLimit: number): QuotaResource {
        this['quotaLimit'] = quotaLimit;
        return this;
    }
    public withUsed(used: number): QuotaResource {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): QuotaResource {
        this['unit'] = unit;
        return this;
    }
    public withRegionId(regionId: string): QuotaResource {
        this['regionId'] = regionId;
        return this;
    }
    public withAvailabilityZoneId(availabilityZoneId: string): QuotaResource {
        this['availabilityZoneId'] = availabilityZoneId;
        return this;
    }
}


export class QuotaResource {
    public type?: QuotaResourceTypeEnum | string;
    public used?: number;
    public quota?: number;
    public unit?: string;
    public constructor() { 
    }
    public withType(type: QuotaResourceTypeEnum | string): QuotaResource {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): QuotaResource {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): QuotaResource {
        this['quota'] = quota;
        return this;
    }
    public withUnit(unit: string): QuotaResource {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QuotaResourceTypeEnum {
    SHARES = 'shares',
    CAPACITY = 'capacity'
}

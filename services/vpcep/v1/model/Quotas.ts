

export class Quotas {
    public type?: QuotasTypeEnum | string;
    public used?: number;
    public quota?: number;
    public constructor() { 
    }
    public withType(type: QuotasTypeEnum | string): Quotas {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): Quotas {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): Quotas {
        this['quota'] = quota;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QuotasTypeEnum {
    ENDPOINT_SERVICE = 'endpoint_service',
    ENDPOINT = 'endpoint'
}

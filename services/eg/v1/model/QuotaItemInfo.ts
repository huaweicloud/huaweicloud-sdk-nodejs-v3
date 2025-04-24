

export class QuotaItemInfo {
    public name?: string;
    public type?: QuotaItemInfoTypeEnum | string;
    public max?: number;
    public min?: number;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withName(name: string): QuotaItemInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: QuotaItemInfoTypeEnum | string): QuotaItemInfo {
        this['type'] = type;
        return this;
    }
    public withMax(max: number): QuotaItemInfo {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): QuotaItemInfo {
        this['min'] = min;
        return this;
    }
    public withQuota(quota: number): QuotaItemInfo {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): QuotaItemInfo {
        this['used'] = used;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QuotaItemInfoTypeEnum {
    CHANNEL = 'CHANNEL',
    CHANNEL_SUBSCRIPTION = 'CHANNEL_SUBSCRIPTION',
    SOURCE = 'SOURCE',
    SUBSCRIPTION = 'SUBSCRIPTION',
    SUBSCRIPTION_TARGET = 'SUBSCRIPTION_TARGET',
    SCHEMA = 'SCHEMA',
    SCHEMA_VERSION = 'SCHEMA_VERSION',
    CONNECTION = 'CONNECTION',
    PRIVATE_ENDPOINT = 'PRIVATE_ENDPOINT',
    SOURCE_RABBITMQ = 'SOURCE_RABBITMQ',
    SOURCE_ROCKETMQ = 'SOURCE_ROCKETMQ'
}

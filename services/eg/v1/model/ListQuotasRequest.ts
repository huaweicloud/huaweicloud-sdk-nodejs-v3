

export class ListQuotasRequest {
    public type?: ListQuotasRequestTypeEnum | string;
    public constructor() { 
    }
    public withType(type: ListQuotasRequestTypeEnum | string): ListQuotasRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListQuotasRequestTypeEnum {
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



export class SubscriptionInfo {
    public endpoints?: Array<string>;
    public protocol?: SubscriptionInfoProtocolEnum;
    public constructor() { 
    }
    public withEndpoints(endpoints: Array<string>): SubscriptionInfo {
        this['endpoints'] = endpoints;
        return this;
    }
    public withProtocol(protocol: SubscriptionInfoProtocolEnum): SubscriptionInfo {
        this['protocol'] = protocol;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubscriptionInfoProtocolEnum {
    SMS = 'sms',
    EMAIL = 'email'
}

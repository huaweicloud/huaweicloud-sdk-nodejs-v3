

export class SmnSubscription {
    public owner?: string;
    public endpoint?: string;
    public protocol?: SmnSubscriptionProtocolEnum | string;
    private 'subscription_urn'?: string;
    private 'topic_urn'?: string;
    public status?: SmnSubscriptionStatusEnum | number;
    public constructor(owner?: string, endpoint?: string, protocol?: string, subscriptionUrn?: string, topicUrn?: string, status?: number) { 
        this['owner'] = owner;
        this['endpoint'] = endpoint;
        this['protocol'] = protocol;
        this['subscription_urn'] = subscriptionUrn;
        this['topic_urn'] = topicUrn;
        this['status'] = status;
    }
    public withOwner(owner: string): SmnSubscription {
        this['owner'] = owner;
        return this;
    }
    public withEndpoint(endpoint: string): SmnSubscription {
        this['endpoint'] = endpoint;
        return this;
    }
    public withProtocol(protocol: SmnSubscriptionProtocolEnum | string): SmnSubscription {
        this['protocol'] = protocol;
        return this;
    }
    public withSubscriptionUrn(subscriptionUrn: string): SmnSubscription {
        this['subscription_urn'] = subscriptionUrn;
        return this;
    }
    public set subscriptionUrn(subscriptionUrn: string  | undefined) {
        this['subscription_urn'] = subscriptionUrn;
    }
    public get subscriptionUrn(): string | undefined {
        return this['subscription_urn'];
    }
    public withTopicUrn(topicUrn: string): SmnSubscription {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withStatus(status: SmnSubscriptionStatusEnum | number): SmnSubscription {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SmnSubscriptionProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    SMS = 'SMS',
    EMAIL = 'EMAIL'
}
/**
    * @export
    * @enum {string}
    */
export enum SmnSubscriptionStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5
}

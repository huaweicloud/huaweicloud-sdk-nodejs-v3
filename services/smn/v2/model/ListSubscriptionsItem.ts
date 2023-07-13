

export class ListSubscriptionsItem {
    private 'topic_urn': string | undefined;
    public protocol: string;
    private 'subscription_urn': string | undefined;
    public owner: string;
    public endpoint: string;
    public remark: string;
    public status: number;
    public constructor(topicUrn?: any, protocol?: any, subscriptionUrn?: any, owner?: any, endpoint?: any, remark?: any, status?: any) { 
        this['topic_urn'] = topicUrn;
        this['protocol'] = protocol;
        this['subscription_urn'] = subscriptionUrn;
        this['owner'] = owner;
        this['endpoint'] = endpoint;
        this['remark'] = remark;
        this['status'] = status;
    }
    public withTopicUrn(topicUrn: string): ListSubscriptionsItem {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
    public withProtocol(protocol: string): ListSubscriptionsItem {
        this['protocol'] = protocol;
        return this;
    }
    public withSubscriptionUrn(subscriptionUrn: string): ListSubscriptionsItem {
        this['subscription_urn'] = subscriptionUrn;
        return this;
    }
    public set subscriptionUrn(subscriptionUrn: string | undefined) {
        this['subscription_urn'] = subscriptionUrn;
    }
    public get subscriptionUrn() {
        return this['subscription_urn'];
    }
    public withOwner(owner: string): ListSubscriptionsItem {
        this['owner'] = owner;
        return this;
    }
    public withEndpoint(endpoint: string): ListSubscriptionsItem {
        this['endpoint'] = endpoint;
        return this;
    }
    public withRemark(remark: string): ListSubscriptionsItem {
        this['remark'] = remark;
        return this;
    }
    public withStatus(status: number): ListSubscriptionsItem {
        this['status'] = status;
        return this;
    }
}
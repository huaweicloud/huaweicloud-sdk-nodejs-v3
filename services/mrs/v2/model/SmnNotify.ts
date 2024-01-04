

export class SmnNotify {
    private 'topic_urn'?: string;
    private 'subscription_name'?: string;
    public constructor() { 
    }
    public withTopicUrn(topicUrn: string): SmnNotify {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSubscriptionName(subscriptionName: string): SmnNotify {
        this['subscription_name'] = subscriptionName;
        return this;
    }
    public set subscriptionName(subscriptionName: string  | undefined) {
        this['subscription_name'] = subscriptionName;
    }
    public get subscriptionName(): string | undefined {
        return this['subscription_name'];
    }
}


export class DeleteSubscriptionsByTopicRequest {
    private 'topic_urn'?: string;
    private 'subscription_urn'?: string;
    public constructor(topicUrn?: string, subscriptionUrn?: string) { 
        this['topic_urn'] = topicUrn;
        this['subscription_urn'] = subscriptionUrn;
    }
    public withTopicUrn(topicUrn: string): DeleteSubscriptionsByTopicRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSubscriptionUrn(subscriptionUrn: string): DeleteSubscriptionsByTopicRequest {
        this['subscription_urn'] = subscriptionUrn;
        return this;
    }
    public set subscriptionUrn(subscriptionUrn: string  | undefined) {
        this['subscription_urn'] = subscriptionUrn;
    }
    public get subscriptionUrn(): string | undefined {
        return this['subscription_urn'];
    }
}
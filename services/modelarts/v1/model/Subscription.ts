

export class Subscription {
    private 'created_at'?: string;
    private 'subscription_id'?: string;
    private 'topic_urns'?: Array<string>;
    public entity?: string;
    public events?: Array<string>;
    public constructor(topicUrns?: Array<string>) { 
        this['topic_urns'] = topicUrns;
    }
    public withCreatedAt(createdAt: string): Subscription {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withSubscriptionId(subscriptionId: string): Subscription {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withTopicUrns(topicUrns: Array<string>): Subscription {
        this['topic_urns'] = topicUrns;
        return this;
    }
    public set topicUrns(topicUrns: Array<string>  | undefined) {
        this['topic_urns'] = topicUrns;
    }
    public get topicUrns(): Array<string> | undefined {
        return this['topic_urns'];
    }
    public withEntity(entity: string): Subscription {
        this['entity'] = entity;
        return this;
    }
    public withEvents(events: Array<string>): Subscription {
        this['events'] = events;
        return this;
    }
}
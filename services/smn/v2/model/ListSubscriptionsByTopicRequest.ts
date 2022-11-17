

export class ListSubscriptionsByTopicRequest {
    private 'topic_urn': string | undefined;
    public offset?: number;
    public limit?: number;
    public constructor(topicUrn?: any) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): ListSubscriptionsByTopicRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
    public withOffset(offset: number): ListSubscriptionsByTopicRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSubscriptionsByTopicRequest {
        this['limit'] = limit;
        return this;
    }
}
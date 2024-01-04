

export class ListSubscriptionsByTopicRequest {
    private 'topic_urn'?: string;
    public offset?: number;
    public limit?: number;
    private 'fuzzy_remark'?: string;
    public constructor(topicUrn?: string) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): ListSubscriptionsByTopicRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
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
    public withFuzzyRemark(fuzzyRemark: string): ListSubscriptionsByTopicRequest {
        this['fuzzy_remark'] = fuzzyRemark;
        return this;
    }
    public set fuzzyRemark(fuzzyRemark: string  | undefined) {
        this['fuzzy_remark'] = fuzzyRemark;
    }
    public get fuzzyRemark(): string | undefined {
        return this['fuzzy_remark'];
    }
}
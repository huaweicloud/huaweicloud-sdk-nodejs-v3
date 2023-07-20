

export class DeleteLogtankRequest {
    private 'topic_urn'?: string;
    private 'logtank_id'?: string;
    public constructor(topicUrn?: string, logtankId?: string) { 
        this['topic_urn'] = topicUrn;
        this['logtank_id'] = logtankId;
    }
    public withTopicUrn(topicUrn: string): DeleteLogtankRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withLogtankId(logtankId: string): DeleteLogtankRequest {
        this['logtank_id'] = logtankId;
        return this;
    }
    public set logtankId(logtankId: string  | undefined) {
        this['logtank_id'] = logtankId;
    }
    public get logtankId(): string | undefined {
        return this['logtank_id'];
    }
}
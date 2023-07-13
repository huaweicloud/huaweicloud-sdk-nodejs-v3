

export class DeleteLogtankRequest {
    private 'topic_urn': string | undefined;
    private 'logtank_id': string | undefined;
    public constructor(topicUrn?: any, logtankId?: any) { 
        this['topic_urn'] = topicUrn;
        this['logtank_id'] = logtankId;
    }
    public withTopicUrn(topicUrn: string): DeleteLogtankRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
    public withLogtankId(logtankId: string): DeleteLogtankRequest {
        this['logtank_id'] = logtankId;
        return this;
    }
    public set logtankId(logtankId: string | undefined) {
        this['logtank_id'] = logtankId;
    }
    public get logtankId() {
        return this['logtank_id'];
    }
}
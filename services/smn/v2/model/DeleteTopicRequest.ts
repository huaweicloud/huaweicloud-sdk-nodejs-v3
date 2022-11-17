

export class DeleteTopicRequest {
    private 'topic_urn': string | undefined;
    public constructor(topicUrn?: any) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): DeleteTopicRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
}
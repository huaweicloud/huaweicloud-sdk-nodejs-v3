

export class DeleteTopicAttributeByNameRequest {
    private 'topic_urn': string | undefined;
    public name: string;
    public constructor(topicUrn?: any, name?: any) { 
        this['topic_urn'] = topicUrn;
        this['name'] = name;
    }
    public withTopicUrn(topicUrn: string): DeleteTopicAttributeByNameRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
    public withName(name: string): DeleteTopicAttributeByNameRequest {
        this['name'] = name;
        return this;
    }
}
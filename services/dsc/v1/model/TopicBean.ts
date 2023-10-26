

export class TopicBean {
    public name?: string;
    private 'topic_urn'?: string;
    public constructor() { 
    }
    public withName(name: string): TopicBean {
        this['name'] = name;
        return this;
    }
    public withTopicUrn(topicUrn: string): TopicBean {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
}
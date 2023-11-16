

export class AlarmBody {
    private 'topic_urn'?: string;
    public constructor(topicUrn?: string) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): AlarmBody {
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
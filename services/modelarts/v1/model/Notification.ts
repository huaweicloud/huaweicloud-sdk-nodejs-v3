

export class Notification {
    private 'topic_urn'?: string;
    public events?: Array<string>;
    public constructor() { 
    }
    public withTopicUrn(topicUrn: string): Notification {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withEvents(events: Array<string>): Notification {
        this['events'] = events;
        return this;
    }
}
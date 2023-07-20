

export class Topics {
    public name?: string;
    private 'topic_urn'?: string;
    private 'display_name'?: string;
    private 'push_policy'?: number;
    public constructor(name?: string, topicUrn?: string) { 
        this['name'] = name;
        this['topic_urn'] = topicUrn;
    }
    public withName(name: string): Topics {
        this['name'] = name;
        return this;
    }
    public withTopicUrn(topicUrn: string): Topics {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withDisplayName(displayName: string): Topics {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withPushPolicy(pushPolicy: number): Topics {
        this['push_policy'] = pushPolicy;
        return this;
    }
    public set pushPolicy(pushPolicy: number  | undefined) {
        this['push_policy'] = pushPolicy;
    }
    public get pushPolicy(): number | undefined {
        return this['push_policy'];
    }
}
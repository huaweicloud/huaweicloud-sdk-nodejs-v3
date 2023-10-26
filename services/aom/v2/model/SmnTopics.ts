

export class SmnTopics {
    private 'display_name'?: string;
    public name?: string;
    private 'push_policy'?: number;
    public status?: SmnTopicsStatusEnum | number;
    private 'topic_urn'?: string;
    public constructor(name?: string, pushPolicy?: number, topicUrn?: string) { 
        this['name'] = name;
        this['push_policy'] = pushPolicy;
        this['topic_urn'] = topicUrn;
    }
    public withDisplayName(displayName: string): SmnTopics {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withName(name: string): SmnTopics {
        this['name'] = name;
        return this;
    }
    public withPushPolicy(pushPolicy: number): SmnTopics {
        this['push_policy'] = pushPolicy;
        return this;
    }
    public set pushPolicy(pushPolicy: number  | undefined) {
        this['push_policy'] = pushPolicy;
    }
    public get pushPolicy(): number | undefined {
        return this['push_policy'];
    }
    public withStatus(status: SmnTopicsStatusEnum | number): SmnTopics {
        this['status'] = status;
        return this;
    }
    public withTopicUrn(topicUrn: string): SmnTopics {
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

/**
    * @export
    * @enum {string}
    */
export enum SmnTopicsStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}

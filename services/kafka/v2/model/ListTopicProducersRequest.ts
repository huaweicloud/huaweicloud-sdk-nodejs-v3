

export class ListTopicProducersRequest {
    private 'instance_id'?: string;
    public topic?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, topic?: string) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): ListTopicProducersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): ListTopicProducersRequest {
        this['topic'] = topic;
        return this;
    }
    public withOffset(offset: number): ListTopicProducersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTopicProducersRequest {
        this['limit'] = limit;
        return this;
    }
}
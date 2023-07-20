

export class ListConsumerGroupOfTopicRequest {
    private 'instance_id'?: string;
    public topic?: string;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: string, topic?: string) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): ListConsumerGroupOfTopicRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): ListConsumerGroupOfTopicRequest {
        this['topic'] = topic;
        return this;
    }
    public withLimit(limit: number): ListConsumerGroupOfTopicRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListConsumerGroupOfTopicRequest {
        this['offset'] = offset;
        return this;
    }
}
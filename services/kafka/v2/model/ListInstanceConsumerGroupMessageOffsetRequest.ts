

export class ListInstanceConsumerGroupMessageOffsetRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public group?: string;
    public topic?: string;
    public partition?: string;
    public offset?: string;
    public limit?: string;
    public constructor(engine?: string, instanceId?: string, group?: string, topic?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['group'] = group;
        this['topic'] = topic;
    }
    public withEngine(engine: string): ListInstanceConsumerGroupMessageOffsetRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ListInstanceConsumerGroupMessageOffsetRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): ListInstanceConsumerGroupMessageOffsetRequest {
        this['group'] = group;
        return this;
    }
    public withTopic(topic: string): ListInstanceConsumerGroupMessageOffsetRequest {
        this['topic'] = topic;
        return this;
    }
    public withPartition(partition: string): ListInstanceConsumerGroupMessageOffsetRequest {
        this['partition'] = partition;
        return this;
    }
    public withOffset(offset: string): ListInstanceConsumerGroupMessageOffsetRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListInstanceConsumerGroupMessageOffsetRequest {
        this['limit'] = limit;
        return this;
    }
}
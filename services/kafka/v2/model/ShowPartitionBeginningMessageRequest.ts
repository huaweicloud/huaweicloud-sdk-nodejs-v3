

export class ShowPartitionBeginningMessageRequest {
    private 'instance_id'?: string;
    public topic?: string;
    public partition?: number;
    public constructor(instanceId?: string, topic?: string, partition?: number) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
        this['partition'] = partition;
    }
    public withInstanceId(instanceId: string): ShowPartitionBeginningMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): ShowPartitionBeginningMessageRequest {
        this['topic'] = topic;
        return this;
    }
    public withPartition(partition: number): ShowPartitionBeginningMessageRequest {
        this['partition'] = partition;
        return this;
    }
}
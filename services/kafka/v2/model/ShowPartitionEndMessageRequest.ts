

export class ShowPartitionEndMessageRequest {
    private 'instance_id'?: string;
    public topic?: string;
    public partition?: number;
    public constructor(instanceId?: string, topic?: string, partition?: number) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
        this['partition'] = partition;
    }
    public withInstanceId(instanceId: string): ShowPartitionEndMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): ShowPartitionEndMessageRequest {
        this['topic'] = topic;
        return this;
    }
    public withPartition(partition: number): ShowPartitionEndMessageRequest {
        this['partition'] = partition;
        return this;
    }
}
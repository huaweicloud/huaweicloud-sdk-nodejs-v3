

export class ShowPartitionEndMessageRequest {
    private 'instance_id': string | undefined;
    public topic: string;
    public partition: number;
    public constructor(instanceId?: any, topic?: any, partition?: any) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
        this['partition'] = partition;
    }
    public withInstanceId(instanceId: string): ShowPartitionEndMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
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


export class ShowPartitionBeginningMessageRequest {
    private 'instance_id': string | undefined;
    public topic: string;
    public partition: number;
    public constructor(instanceId?: any, topic?: any, partition?: any) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
        this['partition'] = partition;
    }
    public withInstanceId(instanceId: string): ShowPartitionBeginningMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
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
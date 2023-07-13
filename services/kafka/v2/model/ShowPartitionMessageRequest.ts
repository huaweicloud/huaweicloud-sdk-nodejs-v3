

export class ShowPartitionMessageRequest {
    private 'instance_id': string | undefined;
    public topic: string;
    public partition: number;
    private 'message_offset': string | undefined;
    public constructor(instanceId?: any, topic?: any, partition?: any, messageOffset?: any) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
        this['partition'] = partition;
        this['message_offset'] = messageOffset;
    }
    public withInstanceId(instanceId: string): ShowPartitionMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withTopic(topic: string): ShowPartitionMessageRequest {
        this['topic'] = topic;
        return this;
    }
    public withPartition(partition: number): ShowPartitionMessageRequest {
        this['partition'] = partition;
        return this;
    }
    public withMessageOffset(messageOffset: string): ShowPartitionMessageRequest {
        this['message_offset'] = messageOffset;
        return this;
    }
    public set messageOffset(messageOffset: string | undefined) {
        this['message_offset'] = messageOffset;
    }
    public get messageOffset() {
        return this['message_offset'];
    }
}
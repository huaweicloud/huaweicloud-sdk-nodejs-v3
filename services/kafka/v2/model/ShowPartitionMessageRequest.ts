

export class ShowPartitionMessageRequest {
    private 'instance_id'?: string;
    public topic?: string;
    public partition?: number;
    private 'message_offset'?: string;
    public constructor(instanceId?: string, topic?: string, partition?: number, messageOffset?: string) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
        this['partition'] = partition;
        this['message_offset'] = messageOffset;
    }
    public withInstanceId(instanceId: string): ShowPartitionMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
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
    public set messageOffset(messageOffset: string  | undefined) {
        this['message_offset'] = messageOffset;
    }
    public get messageOffset(): string | undefined {
        return this['message_offset'];
    }
}
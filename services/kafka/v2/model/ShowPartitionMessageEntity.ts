

export class ShowPartitionMessageEntity {
    public key?: string;
    public value?: string;
    public topic?: string;
    public partition?: number;
    private 'message_offset'?: number;
    public size?: number;
    public timestamp?: number;
    public constructor() { 
    }
    public withKey(key: string): ShowPartitionMessageEntity {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ShowPartitionMessageEntity {
        this['value'] = value;
        return this;
    }
    public withTopic(topic: string): ShowPartitionMessageEntity {
        this['topic'] = topic;
        return this;
    }
    public withPartition(partition: number): ShowPartitionMessageEntity {
        this['partition'] = partition;
        return this;
    }
    public withMessageOffset(messageOffset: number): ShowPartitionMessageEntity {
        this['message_offset'] = messageOffset;
        return this;
    }
    public set messageOffset(messageOffset: number  | undefined) {
        this['message_offset'] = messageOffset;
    }
    public get messageOffset(): number | undefined {
        return this['message_offset'];
    }
    public withSize(size: number): ShowPartitionMessageEntity {
        this['size'] = size;
        return this;
    }
    public withTimestamp(timestamp: number): ShowPartitionMessageEntity {
        this['timestamp'] = timestamp;
        return this;
    }
}
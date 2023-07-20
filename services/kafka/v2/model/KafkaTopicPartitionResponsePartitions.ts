

export class KafkaTopicPartitionResponsePartitions {
    public partition?: number;
    private 'start_offset'?: number;
    private 'last_offset'?: number;
    private 'message_count'?: number;
    private 'last_update_time'?: number;
    public constructor() { 
    }
    public withPartition(partition: number): KafkaTopicPartitionResponsePartitions {
        this['partition'] = partition;
        return this;
    }
    public withStartOffset(startOffset: number): KafkaTopicPartitionResponsePartitions {
        this['start_offset'] = startOffset;
        return this;
    }
    public set startOffset(startOffset: number  | undefined) {
        this['start_offset'] = startOffset;
    }
    public get startOffset(): number | undefined {
        return this['start_offset'];
    }
    public withLastOffset(lastOffset: number): KafkaTopicPartitionResponsePartitions {
        this['last_offset'] = lastOffset;
        return this;
    }
    public set lastOffset(lastOffset: number  | undefined) {
        this['last_offset'] = lastOffset;
    }
    public get lastOffset(): number | undefined {
        return this['last_offset'];
    }
    public withMessageCount(messageCount: number): KafkaTopicPartitionResponsePartitions {
        this['message_count'] = messageCount;
        return this;
    }
    public set messageCount(messageCount: number  | undefined) {
        this['message_count'] = messageCount;
    }
    public get messageCount(): number | undefined {
        return this['message_count'];
    }
    public withLastUpdateTime(lastUpdateTime: number): KafkaTopicPartitionResponsePartitions {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
}
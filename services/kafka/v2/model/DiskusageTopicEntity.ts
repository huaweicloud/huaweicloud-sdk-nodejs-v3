

export class DiskusageTopicEntity {
    public size?: string;
    private 'topic_name'?: string;
    private 'topic_partition'?: string;
    public percentage?: number;
    public constructor() { 
    }
    public withSize(size: string): DiskusageTopicEntity {
        this['size'] = size;
        return this;
    }
    public withTopicName(topicName: string): DiskusageTopicEntity {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
    public withTopicPartition(topicPartition: string): DiskusageTopicEntity {
        this['topic_partition'] = topicPartition;
        return this;
    }
    public set topicPartition(topicPartition: string  | undefined) {
        this['topic_partition'] = topicPartition;
    }
    public get topicPartition(): string | undefined {
        return this['topic_partition'];
    }
    public withPercentage(percentage: number): DiskusageTopicEntity {
        this['percentage'] = percentage;
        return this;
    }
}
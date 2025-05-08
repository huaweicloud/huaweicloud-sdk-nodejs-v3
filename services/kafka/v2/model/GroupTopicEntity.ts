

export class GroupTopicEntity {
    public topic?: string;
    public partitions?: number;
    public lag?: number;
    public constructor() { 
    }
    public withTopic(topic: string): GroupTopicEntity {
        this['topic'] = topic;
        return this;
    }
    public withPartitions(partitions: number): GroupTopicEntity {
        this['partitions'] = partitions;
        return this;
    }
    public withLag(lag: number): GroupTopicEntity {
        this['lag'] = lag;
        return this;
    }
}


export class ConsumerCheckpointInfo {
    public checkpoint?: number;
    private 'consumer_group_name'?: string;
    private 'consumer_name'?: string;
    private 'project_id'?: string;
    private 'shard_id'?: string;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withCheckpoint(checkpoint: number): ConsumerCheckpointInfo {
        this['checkpoint'] = checkpoint;
        return this;
    }
    public withConsumerGroupName(consumerGroupName: string): ConsumerCheckpointInfo {
        this['consumer_group_name'] = consumerGroupName;
        return this;
    }
    public set consumerGroupName(consumerGroupName: string  | undefined) {
        this['consumer_group_name'] = consumerGroupName;
    }
    public get consumerGroupName(): string | undefined {
        return this['consumer_group_name'];
    }
    public withConsumerName(consumerName: string): ConsumerCheckpointInfo {
        this['consumer_name'] = consumerName;
        return this;
    }
    public set consumerName(consumerName: string  | undefined) {
        this['consumer_name'] = consumerName;
    }
    public get consumerName(): string | undefined {
        return this['consumer_name'];
    }
    public withProjectId(projectId: string): ConsumerCheckpointInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withShardId(shardId: string): ConsumerCheckpointInfo {
        this['shard_id'] = shardId;
        return this;
    }
    public set shardId(shardId: string  | undefined) {
        this['shard_id'] = shardId;
    }
    public get shardId(): string | undefined {
        return this['shard_id'];
    }
    public withUpdateTime(updateTime: number): ConsumerCheckpointInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}
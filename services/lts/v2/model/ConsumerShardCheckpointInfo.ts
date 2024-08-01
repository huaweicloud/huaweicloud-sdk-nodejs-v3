

export class ConsumerShardCheckpointInfo {
    private 'shard_id'?: string;
    public checkpoint?: number;
    public constructor(shardId?: string, checkpoint?: number) { 
        this['shard_id'] = shardId;
        this['checkpoint'] = checkpoint;
    }
    public withShardId(shardId: string): ConsumerShardCheckpointInfo {
        this['shard_id'] = shardId;
        return this;
    }
    public set shardId(shardId: string  | undefined) {
        this['shard_id'] = shardId;
    }
    public get shardId(): string | undefined {
        return this['shard_id'];
    }
    public withCheckpoint(checkpoint: number): ConsumerShardCheckpointInfo {
        this['checkpoint'] = checkpoint;
        return this;
    }
}
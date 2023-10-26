

export class ClusterInstance {
    public id?: string;
    public name?: string;
    public type?: string;
    private 'shard_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ClusterInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ClusterInstance {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ClusterInstance {
        this['type'] = type;
        return this;
    }
    public withShardId(shardId: string): ClusterInstance {
        this['shard_id'] = shardId;
        return this;
    }
    public set shardId(shardId: string  | undefined) {
        this['shard_id'] = shardId;
    }
    public get shardId(): string | undefined {
        return this['shard_id'];
    }
}
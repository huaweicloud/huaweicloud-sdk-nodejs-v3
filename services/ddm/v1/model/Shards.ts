

export class Shards {
    private 'data_node_id'?: string;
    private 'physical_db_name'?: string;
    public status?: string;
    private 'shard_index'?: number;
    public constructor() { 
    }
    public withDataNodeId(dataNodeId: string): Shards {
        this['data_node_id'] = dataNodeId;
        return this;
    }
    public set dataNodeId(dataNodeId: string  | undefined) {
        this['data_node_id'] = dataNodeId;
    }
    public get dataNodeId(): string | undefined {
        return this['data_node_id'];
    }
    public withPhysicalDbName(physicalDbName: string): Shards {
        this['physical_db_name'] = physicalDbName;
        return this;
    }
    public set physicalDbName(physicalDbName: string  | undefined) {
        this['physical_db_name'] = physicalDbName;
    }
    public get physicalDbName(): string | undefined {
        return this['physical_db_name'];
    }
    public withStatus(status: string): Shards {
        this['status'] = status;
        return this;
    }
    public withShardIndex(shardIndex: number): Shards {
        this['shard_index'] = shardIndex;
        return this;
    }
    public set shardIndex(shardIndex: number  | undefined) {
        this['shard_index'] = shardIndex;
    }
    public get shardIndex(): number | undefined {
        return this['shard_index'];
    }
}
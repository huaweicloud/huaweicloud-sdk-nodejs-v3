

export class SpecParam {
    private 'sharding_count'?: number;
    private 'replica_count'?: number;
    private 'cache_mode'?: string;
    public constructor() { 
    }
    public withShardingCount(shardingCount: number): SpecParam {
        this['sharding_count'] = shardingCount;
        return this;
    }
    public set shardingCount(shardingCount: number  | undefined) {
        this['sharding_count'] = shardingCount;
    }
    public get shardingCount(): number | undefined {
        return this['sharding_count'];
    }
    public withReplicaCount(replicaCount: number): SpecParam {
        this['replica_count'] = replicaCount;
        return this;
    }
    public set replicaCount(replicaCount: number  | undefined) {
        this['replica_count'] = replicaCount;
    }
    public get replicaCount(): number | undefined {
        return this['replica_count'];
    }
    public withCacheMode(cacheMode: string): SpecParam {
        this['cache_mode'] = cacheMode;
        return this;
    }
    public set cacheMode(cacheMode: string  | undefined) {
        this['cache_mode'] = cacheMode;
    }
    public get cacheMode(): string | undefined {
        return this['cache_mode'];
    }
}
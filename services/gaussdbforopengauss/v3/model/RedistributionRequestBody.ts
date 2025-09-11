

export class RedistributionRequestBody {
    private 'redis_join_tables'?: Array<Array<string>>;
    private 'redis_parallel_jobs'?: number;
    private 'redis_resource_level'?: string;
    public constructor() { 
    }
    public withRedisJoinTables(redisJoinTables: Array<Array<string>>): RedistributionRequestBody {
        this['redis_join_tables'] = redisJoinTables;
        return this;
    }
    public set redisJoinTables(redisJoinTables: Array<Array<string>>  | undefined) {
        this['redis_join_tables'] = redisJoinTables;
    }
    public get redisJoinTables(): Array<Array<string>> | undefined {
        return this['redis_join_tables'];
    }
    public withRedisParallelJobs(redisParallelJobs: number): RedistributionRequestBody {
        this['redis_parallel_jobs'] = redisParallelJobs;
        return this;
    }
    public set redisParallelJobs(redisParallelJobs: number  | undefined) {
        this['redis_parallel_jobs'] = redisParallelJobs;
    }
    public get redisParallelJobs(): number | undefined {
        return this['redis_parallel_jobs'];
    }
    public withRedisResourceLevel(redisResourceLevel: string): RedistributionRequestBody {
        this['redis_resource_level'] = redisResourceLevel;
        return this;
    }
    public set redisResourceLevel(redisResourceLevel: string  | undefined) {
        this['redis_resource_level'] = redisResourceLevel;
    }
    public get redisResourceLevel(): string | undefined {
        return this['redis_resource_level'];
    }
}
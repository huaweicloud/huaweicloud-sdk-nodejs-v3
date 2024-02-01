

export class RedisConfReq {
    private 'redis_mode'?: string;
    private 'parallel_jobs'?: number;
    public constructor(redisMode?: string, parallelJobs?: number) { 
        this['redis_mode'] = redisMode;
        this['parallel_jobs'] = parallelJobs;
    }
    public withRedisMode(redisMode: string): RedisConfReq {
        this['redis_mode'] = redisMode;
        return this;
    }
    public set redisMode(redisMode: string  | undefined) {
        this['redis_mode'] = redisMode;
    }
    public get redisMode(): string | undefined {
        return this['redis_mode'];
    }
    public withParallelJobs(parallelJobs: number): RedisConfReq {
        this['parallel_jobs'] = parallelJobs;
        return this;
    }
    public set parallelJobs(parallelJobs: number  | undefined) {
        this['parallel_jobs'] = parallelJobs;
    }
    public get parallelJobs(): number | undefined {
        return this['parallel_jobs'];
    }
}
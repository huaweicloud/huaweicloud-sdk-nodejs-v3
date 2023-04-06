

export class RedistributionReq {
    private 'redis_mode': string | undefined;
    private 'parallel_jobs': number | undefined;
    public constructor(redisMode?: any, parallelJobs?: any) { 
        this['redis_mode'] = redisMode;
        this['parallel_jobs'] = parallelJobs;
    }
    public withRedisMode(redisMode: string): RedistributionReq {
        this['redis_mode'] = redisMode;
        return this;
    }
    public set redisMode(redisMode: string | undefined) {
        this['redis_mode'] = redisMode;
    }
    public get redisMode() {
        return this['redis_mode'];
    }
    public withParallelJobs(parallelJobs: number): RedistributionReq {
        this['parallel_jobs'] = parallelJobs;
        return this;
    }
    public set parallelJobs(parallelJobs: number | undefined) {
        this['parallel_jobs'] = parallelJobs;
    }
    public get parallelJobs() {
        return this['parallel_jobs'];
    }
}
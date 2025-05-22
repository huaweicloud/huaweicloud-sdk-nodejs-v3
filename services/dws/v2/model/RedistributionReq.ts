

export class RedistributionReq {
    private 'redis_mode'?: RedistributionReqRedisModeEnum | string;
    private 'parallel_jobs'?: number;
    public constructor(redisMode?: string, parallelJobs?: number) { 
        this['redis_mode'] = redisMode;
        this['parallel_jobs'] = parallelJobs;
    }
    public withRedisMode(redisMode: RedistributionReqRedisModeEnum | string): RedistributionReq {
        this['redis_mode'] = redisMode;
        return this;
    }
    public set redisMode(redisMode: RedistributionReqRedisModeEnum | string  | undefined) {
        this['redis_mode'] = redisMode;
    }
    public get redisMode(): RedistributionReqRedisModeEnum | string | undefined {
        return this['redis_mode'];
    }
    public withParallelJobs(parallelJobs: number): RedistributionReq {
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

/**
    * @export
    * @enum {string}
    */
export enum RedistributionReqRedisModeEnum {
    OFFLINE = 'offline',
    ONLINE = 'online'
}

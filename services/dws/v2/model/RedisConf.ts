import { BucketSplitInfo } from './BucketSplitInfo';
import { ScheduleConf } from './ScheduleConf';


export class RedisConf {
    private 'redis_mode'?: string;
    private 'schedule_conf'?: ScheduleConf;
    private 'parallel_jobs'?: number;
    private 'parallel_job'?: number;
    private 'priority_policy'?: string;
    private 'bucket_split_info'?: BucketSplitInfo;
    public constructor(redisMode?: string, parallelJobs?: number, parallelJob?: number) { 
        this['redis_mode'] = redisMode;
        this['parallel_jobs'] = parallelJobs;
        this['parallel_job'] = parallelJob;
    }
    public withRedisMode(redisMode: string): RedisConf {
        this['redis_mode'] = redisMode;
        return this;
    }
    public set redisMode(redisMode: string  | undefined) {
        this['redis_mode'] = redisMode;
    }
    public get redisMode(): string | undefined {
        return this['redis_mode'];
    }
    public withScheduleConf(scheduleConf: ScheduleConf): RedisConf {
        this['schedule_conf'] = scheduleConf;
        return this;
    }
    public set scheduleConf(scheduleConf: ScheduleConf  | undefined) {
        this['schedule_conf'] = scheduleConf;
    }
    public get scheduleConf(): ScheduleConf | undefined {
        return this['schedule_conf'];
    }
    public withParallelJobs(parallelJobs: number): RedisConf {
        this['parallel_jobs'] = parallelJobs;
        return this;
    }
    public set parallelJobs(parallelJobs: number  | undefined) {
        this['parallel_jobs'] = parallelJobs;
    }
    public get parallelJobs(): number | undefined {
        return this['parallel_jobs'];
    }
    public withParallelJob(parallelJob: number): RedisConf {
        this['parallel_job'] = parallelJob;
        return this;
    }
    public set parallelJob(parallelJob: number  | undefined) {
        this['parallel_job'] = parallelJob;
    }
    public get parallelJob(): number | undefined {
        return this['parallel_job'];
    }
    public withPriorityPolicy(priorityPolicy: string): RedisConf {
        this['priority_policy'] = priorityPolicy;
        return this;
    }
    public set priorityPolicy(priorityPolicy: string  | undefined) {
        this['priority_policy'] = priorityPolicy;
    }
    public get priorityPolicy(): string | undefined {
        return this['priority_policy'];
    }
    public withBucketSplitInfo(bucketSplitInfo: BucketSplitInfo): RedisConf {
        this['bucket_split_info'] = bucketSplitInfo;
        return this;
    }
    public set bucketSplitInfo(bucketSplitInfo: BucketSplitInfo  | undefined) {
        this['bucket_split_info'] = bucketSplitInfo;
    }
    public get bucketSplitInfo(): BucketSplitInfo | undefined {
        return this['bucket_split_info'];
    }
}
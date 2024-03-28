

export class Job {
    private 'job_id'?: number;
    public status?: string;
    private 'create_time'?: number;
    public exceptions?: string;
    public metrics?: string;
    public plan?: string;
    public constructor(status?: string, createTime?: number) { 
        this['status'] = status;
        this['create_time'] = createTime;
    }
    public withJobId(jobId: number): Job {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): Job {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: number): Job {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withExceptions(exceptions: string): Job {
        this['exceptions'] = exceptions;
        return this;
    }
    public withMetrics(metrics: string): Job {
        this['metrics'] = metrics;
        return this;
    }
    public withPlan(plan: string): Job {
        this['plan'] = plan;
        return this;
    }
}
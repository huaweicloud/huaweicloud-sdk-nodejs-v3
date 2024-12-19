

export class RetryFactoryJobInstanceBodyTaskRetrys {
    private 'job_id'?: number;
    private 'plan_time'?: number;
    private 'submit_time'?: number;
    public constructor(jobId?: number, planTime?: number, submitTime?: number) { 
        this['job_id'] = jobId;
        this['plan_time'] = planTime;
        this['submit_time'] = submitTime;
    }
    public withJobId(jobId: number): RetryFactoryJobInstanceBodyTaskRetrys {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withPlanTime(planTime: number): RetryFactoryJobInstanceBodyTaskRetrys {
        this['plan_time'] = planTime;
        return this;
    }
    public set planTime(planTime: number  | undefined) {
        this['plan_time'] = planTime;
    }
    public get planTime(): number | undefined {
        return this['plan_time'];
    }
    public withSubmitTime(submitTime: number): RetryFactoryJobInstanceBodyTaskRetrys {
        this['submit_time'] = submitTime;
        return this;
    }
    public set submitTime(submitTime: number  | undefined) {
        this['submit_time'] = submitTime;
    }
    public get submitTime(): number | undefined {
        return this['submit_time'];
    }
}
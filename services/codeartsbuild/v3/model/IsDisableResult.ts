

export class IsDisableResult {
    public forbiddener?: string;
    public reson?: string;
    public disabled?: number;
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'forbidden_time'?: number;
    public constructor() { 
    }
    public withForbiddener(forbiddener: string): IsDisableResult {
        this['forbiddener'] = forbiddener;
        return this;
    }
    public withReson(reson: string): IsDisableResult {
        this['reson'] = reson;
        return this;
    }
    public withDisabled(disabled: number): IsDisableResult {
        this['disabled'] = disabled;
        return this;
    }
    public withJobId(jobId: string): IsDisableResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): IsDisableResult {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withForbiddenTime(forbiddenTime: number): IsDisableResult {
        this['forbidden_time'] = forbiddenTime;
        return this;
    }
    public set forbiddenTime(forbiddenTime: number  | undefined) {
        this['forbidden_time'] = forbiddenTime;
    }
    public get forbiddenTime(): number | undefined {
        return this['forbidden_time'];
    }
}


export class StartInfo {
    private 'job_id'?: string;
    private 'is_only_init_task'?: boolean;
    private 'start_time'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): StartInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withIsOnlyInitTask(isOnlyInitTask: boolean): StartInfo {
        this['is_only_init_task'] = isOnlyInitTask;
        return this;
    }
    public set isOnlyInitTask(isOnlyInitTask: boolean  | undefined) {
        this['is_only_init_task'] = isOnlyInitTask;
    }
    public get isOnlyInitTask(): boolean | undefined {
        return this['is_only_init_task'];
    }
    public withStartTime(startTime: string): StartInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
}
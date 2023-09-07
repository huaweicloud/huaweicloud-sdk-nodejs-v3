

export class StopJobActionInfo {
    private 'job_id'?: string;
    private 'is_force_stop'?: boolean;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): StopJobActionInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withIsForceStop(isForceStop: boolean): StopJobActionInfo {
        this['is_force_stop'] = isForceStop;
        return this;
    }
    public set isForceStop(isForceStop: boolean  | undefined) {
        this['is_force_stop'] = isForceStop;
    }
    public get isForceStop(): boolean | undefined {
        return this['is_force_stop'];
    }
}
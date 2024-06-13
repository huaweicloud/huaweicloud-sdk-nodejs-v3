

export class FlinkRestoreStrategy {
    private 'restore_type'?: string;
    private 'allow_non_restored_state'?: boolean;
    private 'job_start_time_in_ms'?: number;
    private 'savepoint_id'?: string;
    public constructor() { 
    }
    public withRestoreType(restoreType: string): FlinkRestoreStrategy {
        this['restore_type'] = restoreType;
        return this;
    }
    public set restoreType(restoreType: string  | undefined) {
        this['restore_type'] = restoreType;
    }
    public get restoreType(): string | undefined {
        return this['restore_type'];
    }
    public withAllowNonRestoredState(allowNonRestoredState: boolean): FlinkRestoreStrategy {
        this['allow_non_restored_state'] = allowNonRestoredState;
        return this;
    }
    public set allowNonRestoredState(allowNonRestoredState: boolean  | undefined) {
        this['allow_non_restored_state'] = allowNonRestoredState;
    }
    public get allowNonRestoredState(): boolean | undefined {
        return this['allow_non_restored_state'];
    }
    public withJobStartTimeInMs(jobStartTimeInMs: number): FlinkRestoreStrategy {
        this['job_start_time_in_ms'] = jobStartTimeInMs;
        return this;
    }
    public set jobStartTimeInMs(jobStartTimeInMs: number  | undefined) {
        this['job_start_time_in_ms'] = jobStartTimeInMs;
    }
    public get jobStartTimeInMs(): number | undefined {
        return this['job_start_time_in_ms'];
    }
    public withSavepointId(savepointId: string): FlinkRestoreStrategy {
        this['savepoint_id'] = savepointId;
        return this;
    }
    public set savepointId(savepointId: string  | undefined) {
        this['savepoint_id'] = savepointId;
    }
    public get savepointId(): string | undefined {
        return this['savepoint_id'];
    }
}
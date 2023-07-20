

export class SelectedSetAlarmTaskReq {
    private 'job_id'?: string;
    public status?: string;
    private 'engine_type'?: string;
    public constructor(jobId?: string, status?: string, engineType?: string) { 
        this['job_id'] = jobId;
        this['status'] = status;
        this['engine_type'] = engineType;
    }
    public withJobId(jobId: string): SelectedSetAlarmTaskReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): SelectedSetAlarmTaskReq {
        this['status'] = status;
        return this;
    }
    public withEngineType(engineType: string): SelectedSetAlarmTaskReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
}
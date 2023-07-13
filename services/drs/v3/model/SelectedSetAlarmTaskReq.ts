

export class SelectedSetAlarmTaskReq {
    private 'job_id': string | undefined;
    public status: string;
    private 'engine_type': string | undefined;
    public constructor(jobId?: any, status?: any, engineType?: any) { 
        this['job_id'] = jobId;
        this['status'] = status;
        this['engine_type'] = engineType;
    }
    public withJobId(jobId: string): SelectedSetAlarmTaskReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
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
    public set engineType(engineType: string | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
}
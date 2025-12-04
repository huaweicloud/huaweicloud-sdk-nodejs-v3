

export class RunSyncCommandJob {
    private 'phone_id'?: string;
    private 'job_id'?: string;
    public status?: number;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'execute_msg'?: string;
    public constructor() { 
    }
    public withPhoneId(phoneId: string): RunSyncCommandJob {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withJobId(jobId: string): RunSyncCommandJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: number): RunSyncCommandJob {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): RunSyncCommandJob {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): RunSyncCommandJob {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withExecuteMsg(executeMsg: string): RunSyncCommandJob {
        this['execute_msg'] = executeMsg;
        return this;
    }
    public set executeMsg(executeMsg: string  | undefined) {
        this['execute_msg'] = executeMsg;
    }
    public get executeMsg(): string | undefined {
        return this['execute_msg'];
    }
}
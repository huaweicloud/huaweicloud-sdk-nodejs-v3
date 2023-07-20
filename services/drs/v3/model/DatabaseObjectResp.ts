

export class DatabaseObjectResp {
    private 'job_id'?: string;
    public status?: boolean;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): DatabaseObjectResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: boolean): DatabaseObjectResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): DatabaseObjectResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): DatabaseObjectResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}
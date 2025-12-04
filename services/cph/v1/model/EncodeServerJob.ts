

export class EncodeServerJob {
    private 'encode_server_id'?: string;
    private 'job_id'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withEncodeServerId(encodeServerId: string): EncodeServerJob {
        this['encode_server_id'] = encodeServerId;
        return this;
    }
    public set encodeServerId(encodeServerId: string  | undefined) {
        this['encode_server_id'] = encodeServerId;
    }
    public get encodeServerId(): string | undefined {
        return this['encode_server_id'];
    }
    public withJobId(jobId: string): EncodeServerJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withErrorCode(errorCode: string): EncodeServerJob {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): EncodeServerJob {
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


export class PhoneJob {
    private 'phone_id'?: string;
    private 'job_id'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withPhoneId(phoneId: string): PhoneJob {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withJobId(jobId: string): PhoneJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withErrorCode(errorCode: string): PhoneJob {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): PhoneJob {
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
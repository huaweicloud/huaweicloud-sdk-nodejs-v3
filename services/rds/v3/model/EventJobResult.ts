

export class EventJobResult {
    public id?: string;
    private 'instance_id'?: string;
    private 'job_id'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public success?: boolean;
    public constructor() { 
    }
    public withId(id: string): EventJobResult {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): EventJobResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withJobId(jobId: string): EventJobResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withErrorCode(errorCode: string): EventJobResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): EventJobResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withSuccess(success: boolean): EventJobResult {
        this['success'] = success;
        return this;
    }
}
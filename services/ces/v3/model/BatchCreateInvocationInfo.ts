

export class BatchCreateInvocationInfo {
    private 'instance_id'?: string;
    private 'invocation_id'?: string;
    private 'ret_status'?: BatchCreateInvocationInfoRetStatusEnum | string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): BatchCreateInvocationInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInvocationId(invocationId: string): BatchCreateInvocationInfo {
        this['invocation_id'] = invocationId;
        return this;
    }
    public set invocationId(invocationId: string  | undefined) {
        this['invocation_id'] = invocationId;
    }
    public get invocationId(): string | undefined {
        return this['invocation_id'];
    }
    public withRetStatus(retStatus: BatchCreateInvocationInfoRetStatusEnum | string): BatchCreateInvocationInfo {
        this['ret_status'] = retStatus;
        return this;
    }
    public set retStatus(retStatus: BatchCreateInvocationInfoRetStatusEnum | string  | undefined) {
        this['ret_status'] = retStatus;
    }
    public get retStatus(): BatchCreateInvocationInfoRetStatusEnum | string | undefined {
        return this['ret_status'];
    }
    public withErrorCode(errorCode: string): BatchCreateInvocationInfo {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): BatchCreateInvocationInfo {
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

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateInvocationInfoRetStatusEnum {
    SUCCESSFUL = 'successful',
    ERROR = 'error'
}

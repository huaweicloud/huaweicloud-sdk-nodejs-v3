

export class ThrottleBindingBatchFailure {
    private 'bind_id'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    public constructor() { 
    }
    public withBindId(bindId: string): ThrottleBindingBatchFailure {
        this['bind_id'] = bindId;
        return this;
    }
    public set bindId(bindId: string  | undefined) {
        this['bind_id'] = bindId;
    }
    public get bindId(): string | undefined {
        return this['bind_id'];
    }
    public withErrorCode(errorCode: string): ThrottleBindingBatchFailure {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ThrottleBindingBatchFailure {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withApiId(apiId: string): ThrottleBindingBatchFailure {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): ThrottleBindingBatchFailure {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
}
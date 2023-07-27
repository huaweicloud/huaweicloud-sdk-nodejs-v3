

export class AclBindingBatchFailure {
    private 'bind_id'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    public constructor() { 
    }
    public withBindId(bindId: string): AclBindingBatchFailure {
        this['bind_id'] = bindId;
        return this;
    }
    public set bindId(bindId: string  | undefined) {
        this['bind_id'] = bindId;
    }
    public get bindId(): string | undefined {
        return this['bind_id'];
    }
    public withErrorCode(errorCode: string): AclBindingBatchFailure {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): AclBindingBatchFailure {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withApiId(apiId: string): AclBindingBatchFailure {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): AclBindingBatchFailure {
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
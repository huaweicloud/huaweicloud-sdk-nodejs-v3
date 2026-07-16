

export class ApiKeyFailureResponse {
    private 'key_id'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor(keyId?: string, errorCode?: string, errorMsg?: string) { 
        this['key_id'] = keyId;
        this['error_code'] = errorCode;
        this['error_msg'] = errorMsg;
    }
    public withKeyId(keyId: string): ApiKeyFailureResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withErrorCode(errorCode: string): ApiKeyFailureResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ApiKeyFailureResponse {
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
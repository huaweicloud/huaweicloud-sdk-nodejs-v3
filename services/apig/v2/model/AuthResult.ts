

export class AuthResult {
    public status?: AuthResultStatusEnum | string;
    private 'error_msg'?: string;
    private 'error_code'?: string;
    private 'api_name'?: string;
    private 'app_name'?: string;
    public constructor() { 
    }
    public withStatus(status: AuthResultStatusEnum | string): AuthResult {
        this['status'] = status;
        return this;
    }
    public withErrorMsg(errorMsg: string): AuthResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorCode(errorCode: string): AuthResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withApiName(apiName: string): AuthResult {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withAppName(appName: string): AuthResult {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuthResultStatusEnum {
    SUCCESS = 'SUCCESS',
    SKIPPED = 'SKIPPED',
    FAILED = 'FAILED'
}



export class Failure {
    public path?: string;
    private 'error_msg'?: string;
    public method?: string;
    private 'error_code'?: string;
    public constructor() { 
    }
    public withPath(path: string): Failure {
        this['path'] = path;
        return this;
    }
    public withErrorMsg(errorMsg: string): Failure {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withMethod(method: string): Failure {
        this['method'] = method;
        return this;
    }
    public withErrorCode(errorCode: string): Failure {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}
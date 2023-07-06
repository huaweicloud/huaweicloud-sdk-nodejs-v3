

export class ErrorResp {
    private 'error_code': string | undefined;
    private 'error_msg': string | undefined;
    public constructor(errorCode?: any, errorMsg?: any) { 
        this['error_code'] = errorCode;
        this['error_msg'] = errorMsg;
    }
    public withErrorCode(errorCode: string): ErrorResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ErrorResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}
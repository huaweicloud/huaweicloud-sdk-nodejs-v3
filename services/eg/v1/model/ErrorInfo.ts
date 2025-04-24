

export class ErrorInfo {
    private 'error_code'?: string;
    private 'error_detail'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): ErrorInfo {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorDetail(errorDetail: string): ErrorInfo {
        this['error_detail'] = errorDetail;
        return this;
    }
    public set errorDetail(errorDetail: string  | undefined) {
        this['error_detail'] = errorDetail;
    }
    public get errorDetail(): string | undefined {
        return this['error_detail'];
    }
    public withErrorMsg(errorMsg: string): ErrorInfo {
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


export class GaussDBErrorResponseBody {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor(errorCode?: string, errorMsg?: string) { 
        this['error_code'] = errorCode;
        this['error_msg'] = errorMsg;
    }
    public withErrorCode(errorCode: string): GaussDBErrorResponseBody {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): GaussDBErrorResponseBody {
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


export class BaseResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'error_detail'?: string;
    private 'encoded_authorization_message'?: string;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): BaseResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): BaseResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorDetail(errorDetail: string): BaseResponse {
        this['error_detail'] = errorDetail;
        return this;
    }
    public set errorDetail(errorDetail: string  | undefined) {
        this['error_detail'] = errorDetail;
    }
    public get errorDetail(): string | undefined {
        return this['error_detail'];
    }
    public withEncodedAuthorizationMessage(encodedAuthorizationMessage: string): BaseResponse {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
        return this;
    }
    public set encodedAuthorizationMessage(encodedAuthorizationMessage: string  | undefined) {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
    }
    public get encodedAuthorizationMessage(): string | undefined {
        return this['encoded_authorization_message'];
    }
}
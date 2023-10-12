

export class CheckBucketResponse {
    private 'error_code'?: string;
    private 'error_message'?: string;
    private 'response_code'?: number;
    public success?: boolean;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): CheckBucketResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): CheckBucketResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withResponseCode(responseCode: number): CheckBucketResponse {
        this['response_code'] = responseCode;
        return this;
    }
    public set responseCode(responseCode: number  | undefined) {
        this['response_code'] = responseCode;
    }
    public get responseCode(): number | undefined {
        return this['response_code'];
    }
    public withSuccess(success: boolean): CheckBucketResponse {
        this['success'] = success;
        return this;
    }
}
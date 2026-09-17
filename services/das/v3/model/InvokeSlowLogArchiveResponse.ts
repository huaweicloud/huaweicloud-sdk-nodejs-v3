
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InvokeSlowLogArchiveResponse extends SdkResponse {
    public success?: boolean;
    private 'error_code'?: string;
    private 'error_message'?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): InvokeSlowLogArchiveResponse {
        this['success'] = success;
        return this;
    }
    public withErrorCode(errorCode: string): InvokeSlowLogArchiveResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): InvokeSlowLogArchiveResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}
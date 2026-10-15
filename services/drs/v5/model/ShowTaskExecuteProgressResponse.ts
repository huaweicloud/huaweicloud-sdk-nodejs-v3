
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskExecuteProgressResponse extends SdkResponse {
    public status?: string;
    public progress?: string;
    private 'error_code'?: string;
    private 'error_message'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowTaskExecuteProgressResponse {
        this['status'] = status;
        return this;
    }
    public withProgress(progress: string): ShowTaskExecuteProgressResponse {
        this['progress'] = progress;
        return this;
    }
    public withErrorCode(errorCode: string): ShowTaskExecuteProgressResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): ShowTaskExecuteProgressResponse {
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
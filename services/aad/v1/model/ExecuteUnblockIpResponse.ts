
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteUnblockIpResponse extends SdkResponse {
    private 'error_code'?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ExecuteUnblockIpResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withMessage(message: string): ExecuteUnblockIpResponse {
        this['message'] = message;
        return this;
    }
}
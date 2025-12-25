
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRetryPolicyResponse extends SdkResponse {
    public code?: string;
    public data?: string;
    public message?: string;
    private 'request_id'?: string;
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateRetryPolicyResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: string): CreateRetryPolicyResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): CreateRetryPolicyResponse {
        this['message'] = message;
        return this;
    }
    public withRequestId(requestId: string): CreateRetryPolicyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): CreateRetryPolicyResponse {
        this['success'] = success;
        return this;
    }
}
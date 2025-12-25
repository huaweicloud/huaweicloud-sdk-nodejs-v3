
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicyResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: object;
    private 'request_id'?: string;
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowPolicyResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowPolicyResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: object): ShowPolicyResponse {
        this['data'] = data;
        return this;
    }
    public withRequestId(requestId: string): ShowPolicyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): ShowPolicyResponse {
        this['success'] = success;
        return this;
    }
}
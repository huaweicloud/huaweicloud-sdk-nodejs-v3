
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportAopworkflowResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ImportAopworkflowResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ImportAopworkflowResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ImportAopworkflowResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ImportAopworkflowResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}
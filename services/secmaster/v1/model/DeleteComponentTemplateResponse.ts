
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteComponentTemplateResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteComponentTemplateResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteComponentTemplateResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): DeleteComponentTemplateResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): DeleteComponentTemplateResponse {
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
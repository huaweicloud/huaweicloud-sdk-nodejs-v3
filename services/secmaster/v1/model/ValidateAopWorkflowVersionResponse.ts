import { SoarBaseRsp } from './SoarBaseRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidateAopWorkflowVersionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public data?: object;
    public constructor() { 
        super();
    }
    public withCode(code: string): ValidateAopWorkflowVersionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ValidateAopWorkflowVersionResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ValidateAopWorkflowVersionResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ValidateAopWorkflowVersionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withData(data: object): ValidateAopWorkflowVersionResponse {
        this['data'] = data;
        return this;
    }
}
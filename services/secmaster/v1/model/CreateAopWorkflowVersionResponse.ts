import { AopWorkflowVersionInfo } from './AopWorkflowVersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAopWorkflowVersionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public data?: AopWorkflowVersionInfo;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateAopWorkflowVersionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateAopWorkflowVersionResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): CreateAopWorkflowVersionResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): CreateAopWorkflowVersionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withData(data: AopWorkflowVersionInfo): CreateAopWorkflowVersionResponse {
        this['data'] = data;
        return this;
    }
}
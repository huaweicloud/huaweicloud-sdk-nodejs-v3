import { AopWorkflowInfo } from './AopWorkflowInfo';
import { SoarBaseRsp } from './SoarBaseRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAopWorkflowResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public data?: AopWorkflowInfo;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateAopWorkflowResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdateAopWorkflowResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): UpdateAopWorkflowResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): UpdateAopWorkflowResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withData(data: AopWorkflowInfo): UpdateAopWorkflowResponse {
        this['data'] = data;
        return this;
    }
}
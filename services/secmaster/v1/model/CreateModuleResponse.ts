import { LayoutCommonRsp } from './LayoutCommonRsp';
import { ModuleDetailInfo } from './ModuleDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateModuleResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    private 'request_id'?: string;
    public success?: boolean;
    public data?: ModuleDetailInfo;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateModuleResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateModuleResponse {
        this['message'] = message;
        return this;
    }
    public withRequestId(requestId: string): CreateModuleResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): CreateModuleResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: ModuleDetailInfo): CreateModuleResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateModuleResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}
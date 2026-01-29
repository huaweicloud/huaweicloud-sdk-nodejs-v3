import { BatchOperateDataobjectResult } from './BatchOperateDataobjectResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDataobjectRelationResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    private 'request_id'?: string;
    public success?: boolean;
    public data?: BatchOperateDataobjectResult;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateDataobjectRelationResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateDataobjectRelationResponse {
        this['message'] = message;
        return this;
    }
    public withRequestId(requestId: string): CreateDataobjectRelationResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): CreateDataobjectRelationResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: BatchOperateDataobjectResult): CreateDataobjectRelationResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateDataobjectRelationResponse {
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
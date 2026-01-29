import { BatchOperateDataobjectResult } from './BatchOperateDataobjectResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateDataobjectRelationsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    private 'request_id'?: string;
    public success?: boolean;
    public data?: BatchOperateDataobjectResult;
    public constructor() { 
        super();
    }
    public withCode(code: string): BatchCreateDataobjectRelationsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): BatchCreateDataobjectRelationsResponse {
        this['message'] = message;
        return this;
    }
    public withRequestId(requestId: string): BatchCreateDataobjectRelationsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): BatchCreateDataobjectRelationsResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: BatchOperateDataobjectResult): BatchCreateDataobjectRelationsResponse {
        this['data'] = data;
        return this;
    }
}
import { BatchOperateDataobjectResult } from './BatchOperateDataobjectResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDataobjectRelationResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: BatchOperateDataobjectResult;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteDataobjectRelationResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteDataobjectRelationResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: BatchOperateDataobjectResult): DeleteDataobjectRelationResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): DeleteDataobjectRelationResponse {
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
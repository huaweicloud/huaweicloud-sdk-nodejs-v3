import { BatchOperateAlertResult } from './BatchOperateAlertResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAlertResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: BatchOperateAlertResult;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteAlertResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteAlertResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: BatchOperateAlertResult): DeleteAlertResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): DeleteAlertResponse {
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
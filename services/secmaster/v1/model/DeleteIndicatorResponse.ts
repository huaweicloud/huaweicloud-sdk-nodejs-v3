import { IndicatorBatchOperateResponse } from './IndicatorBatchOperateResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIndicatorResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: IndicatorBatchOperateResponse;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteIndicatorResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteIndicatorResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: IndicatorBatchOperateResponse): DeleteIndicatorResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): DeleteIndicatorResponse {
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
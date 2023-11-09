import { IndicatorDetail } from './IndicatorDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateIndicatorResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: IndicatorDetail;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateIndicatorResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdateIndicatorResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: IndicatorDetail): UpdateIndicatorResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateIndicatorResponse {
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
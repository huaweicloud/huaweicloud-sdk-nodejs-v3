import { IndicatorDetail } from './IndicatorDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIndicatorDetailResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: IndicatorDetail;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowIndicatorDetailResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowIndicatorDetailResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: IndicatorDetail): ShowIndicatorDetailResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowIndicatorDetailResponse {
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
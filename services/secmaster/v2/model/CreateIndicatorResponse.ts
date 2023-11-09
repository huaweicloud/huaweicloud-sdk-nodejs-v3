import { IndicatorDetail } from './IndicatorDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIndicatorResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: IndicatorDetail;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateIndicatorResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateIndicatorResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: IndicatorDetail): CreateIndicatorResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateIndicatorResponse {
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
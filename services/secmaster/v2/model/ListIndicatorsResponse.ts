import { IndicatorDetail } from './IndicatorDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIndicatorsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public data?: Array<IndicatorDetail>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListIndicatorsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListIndicatorsResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListIndicatorsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<IndicatorDetail>): ListIndicatorsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListIndicatorsResponse {
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
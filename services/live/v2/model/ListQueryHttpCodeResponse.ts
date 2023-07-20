import { HttpCodeSummary } from './HttpCodeSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQueryHttpCodeResponse extends SdkResponse {
    private 'data_series'?: Array<HttpCodeSummary>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withDataSeries(dataSeries: Array<HttpCodeSummary>): ListQueryHttpCodeResponse {
        this['data_series'] = dataSeries;
        return this;
    }
    public set dataSeries(dataSeries: Array<HttpCodeSummary>  | undefined) {
        this['data_series'] = dataSeries;
    }
    public get dataSeries(): Array<HttpCodeSummary> | undefined {
        return this['data_series'];
    }
    public withXRequestId(xRequestId: string): ListQueryHttpCodeResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}
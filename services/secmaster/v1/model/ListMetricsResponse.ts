import { MetricMetaData } from './MetricMetaData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricsResponse extends SdkResponse {
    public code?: string;
    public data?: Array<MetricMetaData>;
    public message?: string;
    public offset?: number;
    private 'request_id'?: string;
    public limit?: number;
    public success?: boolean;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListMetricsResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: Array<MetricMetaData>): ListMetricsResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ListMetricsResponse {
        this['message'] = message;
        return this;
    }
    public withOffset(offset: number): ListMetricsResponse {
        this['offset'] = offset;
        return this;
    }
    public withRequestId(requestId: string): ListMetricsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withLimit(limit: number): ListMetricsResponse {
        this['limit'] = limit;
        return this;
    }
    public withSuccess(success: boolean): ListMetricsResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): ListMetricsResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListMetricsResponse {
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
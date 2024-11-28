import { BatchCreateInternetBandwidth } from './BatchCreateInternetBandwidth';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateInternetBandwidthResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'internet_bandwidths'?: Array<BatchCreateInternetBandwidth>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchCreateInternetBandwidthResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withInternetBandwidths(internetBandwidths: Array<BatchCreateInternetBandwidth>): BatchCreateInternetBandwidthResponse {
        this['internet_bandwidths'] = internetBandwidths;
        return this;
    }
    public set internetBandwidths(internetBandwidths: Array<BatchCreateInternetBandwidth>  | undefined) {
        this['internet_bandwidths'] = internetBandwidths;
    }
    public get internetBandwidths(): Array<BatchCreateInternetBandwidth> | undefined {
        return this['internet_bandwidths'];
    }
    public withXRequestId(xRequestId: string): BatchCreateInternetBandwidthResponse {
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
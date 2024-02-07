import { CountInternetBandwidths } from './CountInternetBandwidths';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountInternetBandwidthResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'internet_bandwidths'?: CountInternetBandwidths;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CountInternetBandwidthResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withInternetBandwidths(internetBandwidths: CountInternetBandwidths): CountInternetBandwidthResponse {
        this['internet_bandwidths'] = internetBandwidths;
        return this;
    }
    public set internetBandwidths(internetBandwidths: CountInternetBandwidths  | undefined) {
        this['internet_bandwidths'] = internetBandwidths;
    }
    public get internetBandwidths(): CountInternetBandwidths | undefined {
        return this['internet_bandwidths'];
    }
    public withXRequestId(xRequestId: string): CountInternetBandwidthResponse {
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
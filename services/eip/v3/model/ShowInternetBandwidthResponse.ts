import { ShowInternetBandwidth } from './ShowInternetBandwidth';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInternetBandwidthResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'internet_bandwidth'?: ShowInternetBandwidth;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowInternetBandwidthResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withInternetBandwidth(internetBandwidth: ShowInternetBandwidth): ShowInternetBandwidthResponse {
        this['internet_bandwidth'] = internetBandwidth;
        return this;
    }
    public set internetBandwidth(internetBandwidth: ShowInternetBandwidth  | undefined) {
        this['internet_bandwidth'] = internetBandwidth;
    }
    public get internetBandwidth(): ShowInternetBandwidth | undefined {
        return this['internet_bandwidth'];
    }
    public withXRequestId(xRequestId: string): ShowInternetBandwidthResponse {
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
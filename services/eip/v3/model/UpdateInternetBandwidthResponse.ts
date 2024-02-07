import { UpdateInternetBandwidth } from './UpdateInternetBandwidth';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInternetBandwidthResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'internet_bandwidth'?: UpdateInternetBandwidth;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateInternetBandwidthResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withInternetBandwidth(internetBandwidth: UpdateInternetBandwidth): UpdateInternetBandwidthResponse {
        this['internet_bandwidth'] = internetBandwidth;
        return this;
    }
    public set internetBandwidth(internetBandwidth: UpdateInternetBandwidth  | undefined) {
        this['internet_bandwidth'] = internetBandwidth;
    }
    public get internetBandwidth(): UpdateInternetBandwidth | undefined {
        return this['internet_bandwidth'];
    }
    public withXRequestId(xRequestId: string): UpdateInternetBandwidthResponse {
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
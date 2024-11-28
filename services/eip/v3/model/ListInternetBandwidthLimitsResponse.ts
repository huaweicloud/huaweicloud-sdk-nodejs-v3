import { ListInternetBandwidthLimits } from './ListInternetBandwidthLimits';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInternetBandwidthLimitsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'internet_bandwidth_limits'?: Array<ListInternetBandwidthLimits>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListInternetBandwidthLimitsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withInternetBandwidthLimits(internetBandwidthLimits: Array<ListInternetBandwidthLimits>): ListInternetBandwidthLimitsResponse {
        this['internet_bandwidth_limits'] = internetBandwidthLimits;
        return this;
    }
    public set internetBandwidthLimits(internetBandwidthLimits: Array<ListInternetBandwidthLimits>  | undefined) {
        this['internet_bandwidth_limits'] = internetBandwidthLimits;
    }
    public get internetBandwidthLimits(): Array<ListInternetBandwidthLimits> | undefined {
        return this['internet_bandwidth_limits'];
    }
    public withXRequestId(xRequestId: string): ListInternetBandwidthLimitsResponse {
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
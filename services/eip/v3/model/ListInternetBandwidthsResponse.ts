import { ListGlobalEipsResponseBodyPageInfo } from './ListGlobalEipsResponseBodyPageInfo';
import { ListInternetBandwidths } from './ListInternetBandwidths';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInternetBandwidthsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'internet_bandwidths'?: Array<ListInternetBandwidths>;
    private 'page_info'?: ListGlobalEipsResponseBodyPageInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListInternetBandwidthsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withInternetBandwidths(internetBandwidths: Array<ListInternetBandwidths>): ListInternetBandwidthsResponse {
        this['internet_bandwidths'] = internetBandwidths;
        return this;
    }
    public set internetBandwidths(internetBandwidths: Array<ListInternetBandwidths>  | undefined) {
        this['internet_bandwidths'] = internetBandwidths;
    }
    public get internetBandwidths(): Array<ListInternetBandwidths> | undefined {
        return this['internet_bandwidths'];
    }
    public withPageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo): ListInternetBandwidthsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListGlobalEipsResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): ListInternetBandwidthsResponse {
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
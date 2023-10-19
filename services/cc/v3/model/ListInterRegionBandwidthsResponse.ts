import { InterRegionBandwidth } from './InterRegionBandwidth';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInterRegionBandwidthsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'inter_region_bandwidths'?: Array<InterRegionBandwidth>;
    public constructor(requestId?: string, interRegionBandwidths?: Array<InterRegionBandwidth>) { 
        super();
        this['request_id'] = requestId;
        this['inter_region_bandwidths'] = interRegionBandwidths;
    }
    public withRequestId(requestId: string): ListInterRegionBandwidthsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListInterRegionBandwidthsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withInterRegionBandwidths(interRegionBandwidths: Array<InterRegionBandwidth>): ListInterRegionBandwidthsResponse {
        this['inter_region_bandwidths'] = interRegionBandwidths;
        return this;
    }
    public set interRegionBandwidths(interRegionBandwidths: Array<InterRegionBandwidth>  | undefined) {
        this['inter_region_bandwidths'] = interRegionBandwidths;
    }
    public get interRegionBandwidths(): Array<InterRegionBandwidth> | undefined {
        return this['inter_region_bandwidths'];
    }
}
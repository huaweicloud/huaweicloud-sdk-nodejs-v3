import { PageInfoDict } from './PageInfoDict';
import { ShowTenantDict } from './ShowTenantDict';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBandwidthsLimitResponse extends SdkResponse {
    private 'eip_bandwidth_limits'?: Array<ShowTenantDict>;
    private 'page_info'?: PageInfoDict;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withEipBandwidthLimits(eipBandwidthLimits: Array<ShowTenantDict>): ListBandwidthsLimitResponse {
        this['eip_bandwidth_limits'] = eipBandwidthLimits;
        return this;
    }
    public set eipBandwidthLimits(eipBandwidthLimits: Array<ShowTenantDict>  | undefined) {
        this['eip_bandwidth_limits'] = eipBandwidthLimits;
    }
    public get eipBandwidthLimits(): Array<ShowTenantDict> | undefined {
        return this['eip_bandwidth_limits'];
    }
    public withPageInfo(pageInfo: PageInfoDict): ListBandwidthsLimitResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDict  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDict | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListBandwidthsLimitResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}
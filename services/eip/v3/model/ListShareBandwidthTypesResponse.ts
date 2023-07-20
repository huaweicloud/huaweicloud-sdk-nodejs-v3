import { PageInfoOption } from './PageInfoOption';
import { ShareBandwidthTypeShowResp } from './ShareBandwidthTypeShowResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListShareBandwidthTypesResponse extends SdkResponse {
    private 'share_bandwidth_types'?: Array<ShareBandwidthTypeShowResp>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfoOption;
    public constructor() { 
        super();
    }
    public withShareBandwidthTypes(shareBandwidthTypes: Array<ShareBandwidthTypeShowResp>): ListShareBandwidthTypesResponse {
        this['share_bandwidth_types'] = shareBandwidthTypes;
        return this;
    }
    public set shareBandwidthTypes(shareBandwidthTypes: Array<ShareBandwidthTypeShowResp>  | undefined) {
        this['share_bandwidth_types'] = shareBandwidthTypes;
    }
    public get shareBandwidthTypes(): Array<ShareBandwidthTypeShowResp> | undefined {
        return this['share_bandwidth_types'];
    }
    public withRequestId(requestId: string): ListShareBandwidthTypesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfoOption): ListShareBandwidthTypesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoOption  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoOption | undefined {
        return this['page_info'];
    }
}
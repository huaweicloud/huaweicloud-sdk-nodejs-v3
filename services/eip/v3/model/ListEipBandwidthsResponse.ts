import { EipBandwidthResponseBody } from './EipBandwidthResponseBody';
import { PageInfoDict } from './PageInfoDict';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEipBandwidthsResponse extends SdkResponse {
    private 'eip_bandwidths'?: Array<EipBandwidthResponseBody>;
    private 'page_info'?: PageInfoDict;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withEipBandwidths(eipBandwidths: Array<EipBandwidthResponseBody>): ListEipBandwidthsResponse {
        this['eip_bandwidths'] = eipBandwidths;
        return this;
    }
    public set eipBandwidths(eipBandwidths: Array<EipBandwidthResponseBody>  | undefined) {
        this['eip_bandwidths'] = eipBandwidths;
    }
    public get eipBandwidths(): Array<EipBandwidthResponseBody> | undefined {
        return this['eip_bandwidths'];
    }
    public withPageInfo(pageInfo: PageInfoDict): ListEipBandwidthsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDict  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDict | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListEipBandwidthsResponse {
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
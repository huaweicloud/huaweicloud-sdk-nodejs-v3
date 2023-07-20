import { BandwidthResponseBody } from './BandwidthResponseBody';
import { PageInfoOption } from './PageInfoOption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBandwidthResponse extends SdkResponse {
    private 'eip_bandwidths'?: Array<BandwidthResponseBody>;
    private 'page_info'?: PageInfoOption;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withEipBandwidths(eipBandwidths: Array<BandwidthResponseBody>): ListBandwidthResponse {
        this['eip_bandwidths'] = eipBandwidths;
        return this;
    }
    public set eipBandwidths(eipBandwidths: Array<BandwidthResponseBody>  | undefined) {
        this['eip_bandwidths'] = eipBandwidths;
    }
    public get eipBandwidths(): Array<BandwidthResponseBody> | undefined {
        return this['eip_bandwidths'];
    }
    public withPageInfo(pageInfo: PageInfoOption): ListBandwidthResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoOption  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoOption | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListBandwidthResponse {
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
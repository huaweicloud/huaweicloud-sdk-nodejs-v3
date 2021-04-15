import { BandwidthResp } from './BandwidthResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBandwidthsResponse extends SdkResponse {
    public bandwidths?: Array<BandwidthResp>;
    public constructor() { 
        super();
    }
    public withBandwidths(bandwidths: Array<BandwidthResp>): ListBandwidthsResponse {
        this['bandwidths'] = bandwidths;
        return this;
    }
}
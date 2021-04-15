import { BandwidthResp } from './BandwidthResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBandwidthResponse extends SdkResponse {
    public bandwidth?: BandwidthResp;
    public constructor() { 
        super();
    }
    public withBandwidth(bandwidth: BandwidthResp): ShowBandwidthResponse {
        this['bandwidth'] = bandwidth;
        return this;
    }
}
import { BandwidthResp } from './BandwidthResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBandwidthResponse extends SdkResponse {
    public bandwidth?: BandwidthResp;
    public constructor() { 
        super();
    }
    public withBandwidth(bandwidth: BandwidthResp): UpdateBandwidthResponse {
        this['bandwidth'] = bandwidth;
        return this;
    }
}
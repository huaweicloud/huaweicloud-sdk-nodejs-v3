import { BandwidthResp } from './BandwidthResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSharedBandwidthResponse extends SdkResponse {
    public bandwidth?: BandwidthResp;
    public constructor() { 
        super();
    }
    public withBandwidth(bandwidth: BandwidthResp): CreateSharedBandwidthResponse {
        this['bandwidth'] = bandwidth;
        return this;
    }
}
import { BandwidthRespInsert } from './BandwidthRespInsert';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddPublicipsIntoSharedBandwidthResponse extends SdkResponse {
    public bandwidth?: BandwidthRespInsert;
    public constructor() { 
        super();
    }
    public withBandwidth(bandwidth: BandwidthRespInsert): AddPublicipsIntoSharedBandwidthResponse {
        this['bandwidth'] = bandwidth;
        return this;
    }
}
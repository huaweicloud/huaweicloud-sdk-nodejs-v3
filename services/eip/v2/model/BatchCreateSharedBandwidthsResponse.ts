import { BatchBandwidthResp } from './BatchBandwidthResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateSharedBandwidthsResponse extends SdkResponse {
    public bandwidths?: Array<BatchBandwidthResp>;
    public constructor() { 
        super();
    }
    public withBandwidths(bandwidths: Array<BatchBandwidthResp>): BatchCreateSharedBandwidthsResponse {
        this['bandwidths'] = bandwidths;
        return this;
    }
}
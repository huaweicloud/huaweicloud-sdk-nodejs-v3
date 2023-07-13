import { BandwidthStatisticsTimelineItem } from './BandwidthStatisticsTimelineItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBandwidthTimelineResponse extends SdkResponse {
    public body?: Array<BandwidthStatisticsTimelineItem>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<BandwidthStatisticsTimelineItem>): ListBandwidthTimelineResponse {
        this['body'] = body;
        return this;
    }
}
import { StatisticsTimelineItem } from './StatisticsTimelineItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResponseCodeTimelineResponse extends SdkResponse {
    public body?: Array<StatisticsTimelineItem>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<StatisticsTimelineItem>): ListResponseCodeTimelineResponse {
        this['body'] = body;
        return this;
    }
}
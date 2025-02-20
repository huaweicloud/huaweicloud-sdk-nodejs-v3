import { TimelineInfo } from './TimelineInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTimelineResponse extends SdkResponse {
    public count?: number;
    public timelines?: Array<TimelineInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowTimelineResponse {
        this['count'] = count;
        return this;
    }
    public withTimelines(timelines: Array<TimelineInfo>): ShowTimelineResponse {
        this['timelines'] = timelines;
        return this;
    }
}
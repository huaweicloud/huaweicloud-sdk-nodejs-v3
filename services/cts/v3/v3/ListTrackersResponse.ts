import { TrackerResponseBody } from './TrackerResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrackersResponse extends SdkResponse {
    public trackers?: Array<TrackerResponseBody>;
    public constructor() { 
        super();
    }
    public withTrackers(trackers: Array<TrackerResponseBody>): ListTrackersResponse {
        this['trackers'] = trackers;
        return this;
    }
}
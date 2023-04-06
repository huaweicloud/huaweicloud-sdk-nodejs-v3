import { EventResponse } from './EventResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventsResponse extends SdkResponse {
    public events?: Array<EventResponse>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withEvents(events: Array<EventResponse>): ListEventsResponse {
        this['events'] = events;
        return this;
    }
    public withCount(count: number): ListEventsResponse {
        this['count'] = count;
        return this;
    }
}
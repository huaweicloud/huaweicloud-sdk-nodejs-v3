import { EventModel } from './EventModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventsResponse extends SdkResponse {
    public events?: Array<EventModel>;
    public constructor() { 
        super();
    }
    public withEvents(events: Array<EventModel>): ListEventsResponse {
        this['events'] = events;
        return this;
    }
}
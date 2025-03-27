import { EventResponse } from './EventResponse';
import { ListEventsResponsePageInfo } from './ListEventsResponsePageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduledEventsResponse extends SdkResponse {
    public events?: Array<EventResponse>;
    private 'page_info'?: ListEventsResponsePageInfo;
    public constructor() { 
        super();
    }
    public withEvents(events: Array<EventResponse>): ListScheduledEventsResponse {
        this['events'] = events;
        return this;
    }
    public withPageInfo(pageInfo: ListEventsResponsePageInfo): ListScheduledEventsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListEventsResponsePageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListEventsResponsePageInfo | undefined {
        return this['page_info'];
    }
}
import { ListCloudPhoneServersModelOfferingsResponseBodyPageInfo } from './ListCloudPhoneServersModelOfferingsResponseBodyPageInfo';
import { ListScheduledEventsResponseBodyScheduledEvents } from './ListScheduledEventsResponseBodyScheduledEvents';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduledEventsResponse extends SdkResponse {
    private 'request_id'?: string;
    public count?: number;
    private 'scheduled_events'?: Array<ListScheduledEventsResponseBodyScheduledEvents>;
    private 'page_info'?: ListCloudPhoneServersModelOfferingsResponseBodyPageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListScheduledEventsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCount(count: number): ListScheduledEventsResponse {
        this['count'] = count;
        return this;
    }
    public withScheduledEvents(scheduledEvents: Array<ListScheduledEventsResponseBodyScheduledEvents>): ListScheduledEventsResponse {
        this['scheduled_events'] = scheduledEvents;
        return this;
    }
    public set scheduledEvents(scheduledEvents: Array<ListScheduledEventsResponseBodyScheduledEvents>  | undefined) {
        this['scheduled_events'] = scheduledEvents;
    }
    public get scheduledEvents(): Array<ListScheduledEventsResponseBodyScheduledEvents> | undefined {
        return this['scheduled_events'];
    }
    public withPageInfo(pageInfo: ListCloudPhoneServersModelOfferingsResponseBodyPageInfo): ListScheduledEventsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListCloudPhoneServersModelOfferingsResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListCloudPhoneServersModelOfferingsResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
}
import { Event } from './Event';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistoryWaitEventsResponse extends SdkResponse {
    private 'total_count'?: number;
    public events?: Array<Event>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListHistoryWaitEventsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withEvents(events: Array<Event>): ListHistoryWaitEventsResponse {
        this['events'] = events;
        return this;
    }
}
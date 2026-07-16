import { ScheduledEvent } from './ScheduledEvent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduledEventsResponse extends SdkResponse {
    public events?: Array<ScheduledEvent>;
    public count?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withEvents(events: Array<ScheduledEvent>): ListScheduledEventsResponse {
        this['events'] = events;
        return this;
    }
    public withCount(count: number): ListScheduledEventsResponse {
        this['count'] = count;
        return this;
    }
    public withXRequestId(xRequestId: string): ListScheduledEventsResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}
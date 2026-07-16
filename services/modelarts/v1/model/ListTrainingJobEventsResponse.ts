import { Event } from './Event';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrainingJobEventsResponse extends SdkResponse {
    public total?: number;
    public limit?: number;
    public offset?: number;
    public order?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public events?: Array<Event>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTrainingJobEventsResponse {
        this['total'] = total;
        return this;
    }
    public withLimit(limit: number): ListTrainingJobEventsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTrainingJobEventsResponse {
        this['offset'] = offset;
        return this;
    }
    public withOrder(order: string): ListTrainingJobEventsResponse {
        this['order'] = order;
        return this;
    }
    public withStartTime(startTime: string): ListTrainingJobEventsResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTrainingJobEventsResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withEvents(events: Array<Event>): ListTrainingJobEventsResponse {
        this['events'] = events;
        return this;
    }
}
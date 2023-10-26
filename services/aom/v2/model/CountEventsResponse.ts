import { EventSeries } from './EventSeries';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountEventsResponse extends SdkResponse {
    public step?: number;
    public timestamps?: Array<number>;
    public series?: Array<EventSeries>;
    public constructor() { 
        super();
    }
    public withStep(step: number): CountEventsResponse {
        this['step'] = step;
        return this;
    }
    public withTimestamps(timestamps: Array<number>): CountEventsResponse {
        this['timestamps'] = timestamps;
        return this;
    }
    public withSeries(series: Array<EventSeries>): CountEventsResponse {
        this['series'] = series;
        return this;
    }
}
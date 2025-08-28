import { BotRequestTimeline } from './BotRequestTimeline';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBotMTimelineResponse extends SdkResponse {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'time_span'?: number;
    public timelines?: Array<BotRequestTimeline>;
    public constructor() { 
        super();
    }
    public withStartTime(startTime: number): ListBotMTimelineResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListBotMTimelineResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTimeSpan(timeSpan: number): ListBotMTimelineResponse {
        this['time_span'] = timeSpan;
        return this;
    }
    public set timeSpan(timeSpan: number  | undefined) {
        this['time_span'] = timeSpan;
    }
    public get timeSpan(): number | undefined {
        return this['time_span'];
    }
    public withTimelines(timelines: Array<BotRequestTimeline>): ListBotMTimelineResponse {
        this['timelines'] = timelines;
        return this;
    }
}
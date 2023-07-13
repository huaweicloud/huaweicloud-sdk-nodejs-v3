
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCdnStatisticsResponse extends SdkResponse {
    private 'start_time'?: string | undefined;
    public interval?: number;
    public values?: Array<number>;
    public constructor() { 
        super();
    }
    public withStartTime(startTime: string): ShowCdnStatisticsResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withInterval(interval: number): ShowCdnStatisticsResponse {
        this['interval'] = interval;
        return this;
    }
    public withValues(values: Array<number>): ShowCdnStatisticsResponse {
        this['values'] = values;
        return this;
    }
}

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCdnStatisticsResponse extends SdkResponse {
    private 'start_time'?: string;
    public interval?: number;
    public result?: { [key: string]: Array<number>; };
    public constructor() { 
        super();
    }
    public withStartTime(startTime: string): ListCdnStatisticsResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withInterval(interval: number): ListCdnStatisticsResponse {
        this['interval'] = interval;
        return this;
    }
    public withResult(result: { [key: string]: Array<number>; }): ListCdnStatisticsResponse {
        this['result'] = result;
        return this;
    }
}
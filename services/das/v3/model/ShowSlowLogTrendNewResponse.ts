import { SlowLogTrendPoint } from './SlowLogTrendPoint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowLogTrendNewResponse extends SdkResponse {
    private 'trend_data'?: Array<SlowLogTrendPoint>;
    public interval?: number;
    public constructor() { 
        super();
    }
    public withTrendData(trendData: Array<SlowLogTrendPoint>): ShowSlowLogTrendNewResponse {
        this['trend_data'] = trendData;
        return this;
    }
    public set trendData(trendData: Array<SlowLogTrendPoint>  | undefined) {
        this['trend_data'] = trendData;
    }
    public get trendData(): Array<SlowLogTrendPoint> | undefined {
        return this['trend_data'];
    }
    public withInterval(interval: number): ShowSlowLogTrendNewResponse {
        this['interval'] = interval;
        return this;
    }
}
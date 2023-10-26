import { WeeklyCount } from './WeeklyCount';
import { WeeklyTop10 } from './WeeklyTop10';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWeeklyReportsResponse extends SdkResponse {
    private 'ddos_intercept_times'?: number;
    public weekdata?: Array<WeeklyCount>;
    public top10?: Array<WeeklyTop10>;
    public constructor() { 
        super();
    }
    public withDdosInterceptTimes(ddosInterceptTimes: number): ListWeeklyReportsResponse {
        this['ddos_intercept_times'] = ddosInterceptTimes;
        return this;
    }
    public set ddosInterceptTimes(ddosInterceptTimes: number  | undefined) {
        this['ddos_intercept_times'] = ddosInterceptTimes;
    }
    public get ddosInterceptTimes(): number | undefined {
        return this['ddos_intercept_times'];
    }
    public withWeekdata(weekdata: Array<WeeklyCount>): ListWeeklyReportsResponse {
        this['weekdata'] = weekdata;
        return this;
    }
    public withTop10(top10: Array<WeeklyTop10>): ListWeeklyReportsResponse {
        this['top10'] = top10;
        return this;
    }
}
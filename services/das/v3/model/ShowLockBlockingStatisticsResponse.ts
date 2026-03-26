
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLockBlockingStatisticsResponse extends SdkResponse {
    private 'last_day_count'?: number;
    private 'last_week_count'?: number;
    private 'last_two_week_count'?: number;
    private 'last_month_count'?: number;
    public constructor() { 
        super();
    }
    public withLastDayCount(lastDayCount: number): ShowLockBlockingStatisticsResponse {
        this['last_day_count'] = lastDayCount;
        return this;
    }
    public set lastDayCount(lastDayCount: number  | undefined) {
        this['last_day_count'] = lastDayCount;
    }
    public get lastDayCount(): number | undefined {
        return this['last_day_count'];
    }
    public withLastWeekCount(lastWeekCount: number): ShowLockBlockingStatisticsResponse {
        this['last_week_count'] = lastWeekCount;
        return this;
    }
    public set lastWeekCount(lastWeekCount: number  | undefined) {
        this['last_week_count'] = lastWeekCount;
    }
    public get lastWeekCount(): number | undefined {
        return this['last_week_count'];
    }
    public withLastTwoWeekCount(lastTwoWeekCount: number): ShowLockBlockingStatisticsResponse {
        this['last_two_week_count'] = lastTwoWeekCount;
        return this;
    }
    public set lastTwoWeekCount(lastTwoWeekCount: number  | undefined) {
        this['last_two_week_count'] = lastTwoWeekCount;
    }
    public get lastTwoWeekCount(): number | undefined {
        return this['last_two_week_count'];
    }
    public withLastMonthCount(lastMonthCount: number): ShowLockBlockingStatisticsResponse {
        this['last_month_count'] = lastMonthCount;
        return this;
    }
    public set lastMonthCount(lastMonthCount: number  | undefined) {
        this['last_month_count'] = lastMonthCount;
    }
    public get lastMonthCount(): number | undefined {
        return this['last_month_count'];
    }
}
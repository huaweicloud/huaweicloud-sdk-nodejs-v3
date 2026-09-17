
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMissingIndexStatisticsResponse extends SdkResponse {
    private 'collect_time'?: number;
    private 'total_missing_index_count'?: number;
    private 'user_impact_gt80_count'?: number;
    private 'last_day_accessed_count'?: number;
    private 'last_week_accessed_count'?: number;
    private 'last_two_week_accessed_count'?: number;
    private 'last_month_accessed_count'?: number;
    public constructor() { 
        super();
    }
    public withCollectTime(collectTime: number): ShowMissingIndexStatisticsResponse {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
    public withTotalMissingIndexCount(totalMissingIndexCount: number): ShowMissingIndexStatisticsResponse {
        this['total_missing_index_count'] = totalMissingIndexCount;
        return this;
    }
    public set totalMissingIndexCount(totalMissingIndexCount: number  | undefined) {
        this['total_missing_index_count'] = totalMissingIndexCount;
    }
    public get totalMissingIndexCount(): number | undefined {
        return this['total_missing_index_count'];
    }
    public withUserImpactGt80Count(userImpactGt80Count: number): ShowMissingIndexStatisticsResponse {
        this['user_impact_gt80_count'] = userImpactGt80Count;
        return this;
    }
    public set userImpactGt80Count(userImpactGt80Count: number  | undefined) {
        this['user_impact_gt80_count'] = userImpactGt80Count;
    }
    public get userImpactGt80Count(): number | undefined {
        return this['user_impact_gt80_count'];
    }
    public withLastDayAccessedCount(lastDayAccessedCount: number): ShowMissingIndexStatisticsResponse {
        this['last_day_accessed_count'] = lastDayAccessedCount;
        return this;
    }
    public set lastDayAccessedCount(lastDayAccessedCount: number  | undefined) {
        this['last_day_accessed_count'] = lastDayAccessedCount;
    }
    public get lastDayAccessedCount(): number | undefined {
        return this['last_day_accessed_count'];
    }
    public withLastWeekAccessedCount(lastWeekAccessedCount: number): ShowMissingIndexStatisticsResponse {
        this['last_week_accessed_count'] = lastWeekAccessedCount;
        return this;
    }
    public set lastWeekAccessedCount(lastWeekAccessedCount: number  | undefined) {
        this['last_week_accessed_count'] = lastWeekAccessedCount;
    }
    public get lastWeekAccessedCount(): number | undefined {
        return this['last_week_accessed_count'];
    }
    public withLastTwoWeekAccessedCount(lastTwoWeekAccessedCount: number): ShowMissingIndexStatisticsResponse {
        this['last_two_week_accessed_count'] = lastTwoWeekAccessedCount;
        return this;
    }
    public set lastTwoWeekAccessedCount(lastTwoWeekAccessedCount: number  | undefined) {
        this['last_two_week_accessed_count'] = lastTwoWeekAccessedCount;
    }
    public get lastTwoWeekAccessedCount(): number | undefined {
        return this['last_two_week_accessed_count'];
    }
    public withLastMonthAccessedCount(lastMonthAccessedCount: number): ShowMissingIndexStatisticsResponse {
        this['last_month_accessed_count'] = lastMonthAccessedCount;
        return this;
    }
    public set lastMonthAccessedCount(lastMonthAccessedCount: number  | undefined) {
        this['last_month_accessed_count'] = lastMonthAccessedCount;
    }
    public get lastMonthAccessedCount(): number | undefined {
        return this['last_month_accessed_count'];
    }
}
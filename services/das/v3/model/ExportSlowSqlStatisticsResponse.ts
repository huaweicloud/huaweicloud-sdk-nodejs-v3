import { SlowSqlStatistics } from './SlowSqlStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportSlowSqlStatisticsResponse extends SdkResponse {
    private 'statistics_list'?: Array<SlowSqlStatistics>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withStatisticsList(statisticsList: Array<SlowSqlStatistics>): ExportSlowSqlStatisticsResponse {
        this['statistics_list'] = statisticsList;
        return this;
    }
    public set statisticsList(statisticsList: Array<SlowSqlStatistics>  | undefined) {
        this['statistics_list'] = statisticsList;
    }
    public get statisticsList(): Array<SlowSqlStatistics> | undefined {
        return this['statistics_list'];
    }
    public withTotalCount(totalCount: number): ExportSlowSqlStatisticsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}
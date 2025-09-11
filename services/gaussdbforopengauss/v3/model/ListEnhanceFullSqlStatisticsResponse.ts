import { FullSqlStatisticInfoResult } from './FullSqlStatisticInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnhanceFullSqlStatisticsResponse extends SdkResponse {
    private 'total_count'?: number;
    public statistics?: Array<FullSqlStatisticInfoResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListEnhanceFullSqlStatisticsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withStatistics(statistics: Array<FullSqlStatisticInfoResult>): ListEnhanceFullSqlStatisticsResponse {
        this['statistics'] = statistics;
        return this;
    }
}
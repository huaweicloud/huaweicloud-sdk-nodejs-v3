import { DimensionListResult } from './DimensionListResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSessionStatisticsResponse extends SdkResponse {
    public total?: number;
    private 'statistics_list'?: Array<DimensionListResult>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSessionStatisticsResponse {
        this['total'] = total;
        return this;
    }
    public withStatisticsList(statisticsList: Array<DimensionListResult>): ListSessionStatisticsResponse {
        this['statistics_list'] = statisticsList;
        return this;
    }
    public set statisticsList(statisticsList: Array<DimensionListResult>  | undefined) {
        this['statistics_list'] = statisticsList;
    }
    public get statisticsList(): Array<DimensionListResult> | undefined {
        return this['statistics_list'];
    }
}
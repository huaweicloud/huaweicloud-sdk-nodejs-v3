import { SlowLogStatistics } from './SlowLogStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowLogStatisticsNewResponse extends SdkResponse {
    private 'statistics_list'?: Array<SlowLogStatistics>;
    public constructor() { 
        super();
    }
    public withStatisticsList(statisticsList: Array<SlowLogStatistics>): ShowSlowLogStatisticsNewResponse {
        this['statistics_list'] = statisticsList;
        return this;
    }
    public set statisticsList(statisticsList: Array<SlowLogStatistics>  | undefined) {
        this['statistics_list'] = statisticsList;
    }
    public get statisticsList(): Array<SlowLogStatistics> | undefined {
        return this['statistics_list'];
    }
}
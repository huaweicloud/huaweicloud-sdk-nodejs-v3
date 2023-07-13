import { Statistic } from './Statistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStatisticsResponse extends SdkResponse {
    public statistics?: Array<Statistic>;
    public constructor() { 
        super();
    }
    public withStatistics(statistics: Array<Statistic>): ListStatisticsResponse {
        this['statistics'] = statistics;
        return this;
    }
}
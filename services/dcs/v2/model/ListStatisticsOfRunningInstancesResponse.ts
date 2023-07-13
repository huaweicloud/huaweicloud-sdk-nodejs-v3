import { InstanceStatistic } from './InstanceStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStatisticsOfRunningInstancesResponse extends SdkResponse {
    public statistics?: Array<InstanceStatistic>;
    public constructor() { 
        super();
    }
    public withStatistics(statistics: Array<InstanceStatistic>): ListStatisticsOfRunningInstancesResponse {
        this['statistics'] = statistics;
        return this;
    }
}
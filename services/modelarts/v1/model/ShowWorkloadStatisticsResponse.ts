import { WorkloadListStatisticsStatistics } from './WorkloadListStatisticsStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkloadStatisticsResponse extends SdkResponse {
    public statistics?: WorkloadListStatisticsStatistics;
    public constructor() { 
        super();
    }
    public withStatistics(statistics: WorkloadListStatisticsStatistics): ShowWorkloadStatisticsResponse {
        this['statistics'] = statistics;
        return this;
    }
}
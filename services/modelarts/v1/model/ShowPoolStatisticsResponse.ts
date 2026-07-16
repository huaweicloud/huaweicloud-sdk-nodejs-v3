import { PoolStatisticsStatistics } from './PoolStatisticsStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPoolStatisticsResponse extends SdkResponse {
    public statistics?: PoolStatisticsStatistics;
    public operationTime?: string;
    public constructor() { 
        super();
    }
    public withStatistics(statistics: PoolStatisticsStatistics): ShowPoolStatisticsResponse {
        this['statistics'] = statistics;
        return this;
    }
    public withOperationTime(operationTime: string): ShowPoolStatisticsResponse {
        this['operationTime'] = operationTime;
        return this;
    }
}
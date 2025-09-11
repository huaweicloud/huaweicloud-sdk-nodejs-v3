import { DimensionListResult } from './DimensionListResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSessionStatisticsResponse extends SdkResponse {
    public total?: number;
    public statistics?: Array<DimensionListResult>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSessionStatisticsResponse {
        this['total'] = total;
        return this;
    }
    public withStatistics(statistics: Array<DimensionListResult>): ListSessionStatisticsResponse {
        this['statistics'] = statistics;
        return this;
    }
}
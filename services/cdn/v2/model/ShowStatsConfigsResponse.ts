import { StatsConfigDetails } from './StatsConfigDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatsConfigsResponse extends SdkResponse {
    public total?: number;
    public data?: Array<StatsConfigDetails>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowStatsConfigsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<StatsConfigDetails>): ShowStatsConfigsResponse {
        this['data'] = data;
        return this;
    }
}
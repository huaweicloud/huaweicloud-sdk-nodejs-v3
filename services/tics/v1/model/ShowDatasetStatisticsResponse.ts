import { LeagueDatasetStatisticsVo } from './LeagueDatasetStatisticsVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatasetStatisticsResponse extends SdkResponse {
    public body?: Array<LeagueDatasetStatisticsVo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<LeagueDatasetStatisticsVo>): ShowDatasetStatisticsResponse {
        this['body'] = body;
        return this;
    }
}
import { LeaguePartnerStatisticsVo } from './LeaguePartnerStatisticsVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPartnerStatisticsResponse extends SdkResponse {
    public body?: Array<LeaguePartnerStatisticsVo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<LeaguePartnerStatisticsVo>): ShowPartnerStatisticsResponse {
        this['body'] = body;
        return this;
    }
}
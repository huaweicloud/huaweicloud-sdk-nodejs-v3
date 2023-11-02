import { StatisticForCallDetail } from './StatisticForCallDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiTopNResponse extends SdkResponse {
    public statistics?: Array<StatisticForCallDetail>;
    public constructor() { 
        super();
    }
    public withStatistics(statistics: Array<StatisticForCallDetail>): ListApiTopNResponse {
        this['statistics'] = statistics;
        return this;
    }
}
import { IntelligentKillSessionStatistic } from './IntelligentKillSessionStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIntelligentKillSessionStatisticResponse extends SdkResponse {
    public statistics?: Array<IntelligentKillSessionStatistic>;
    public constructor() { 
        super();
    }
    public withStatistics(statistics: Array<IntelligentKillSessionStatistic>): ShowIntelligentKillSessionStatisticResponse {
        this['statistics'] = statistics;
        return this;
    }
}
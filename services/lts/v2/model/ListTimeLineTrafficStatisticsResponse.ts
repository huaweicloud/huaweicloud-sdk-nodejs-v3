import { Resulits } from './Resulits';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTimeLineTrafficStatisticsResponse extends SdkResponse {
    public results?: Array<Resulits>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<Resulits>): ListTimeLineTrafficStatisticsResponse {
        this['results'] = results;
        return this;
    }
}
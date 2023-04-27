import { ResultsTopnBody } from './ResultsTopnBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopnTrafficStatisticsResponse extends SdkResponse {
    public results?: Array<ResultsTopnBody>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<ResultsTopnBody>): ListTopnTrafficStatisticsResponse {
        this['results'] = results;
        return this;
    }
}
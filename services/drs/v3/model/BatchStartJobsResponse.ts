import { StartJobResp } from './StartJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchStartJobsResponse extends SdkResponse {
    public results?: Array<StartJobResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<StartJobResp>): BatchStartJobsResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchStartJobsResponse {
        this['count'] = count;
        return this;
    }
}
import { PauseJobResp } from './PauseJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchStopJobsResponse extends SdkResponse {
    public results?: Array<PauseJobResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<PauseJobResp>): BatchStopJobsResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchStopJobsResponse {
        this['count'] = count;
        return this;
    }
}
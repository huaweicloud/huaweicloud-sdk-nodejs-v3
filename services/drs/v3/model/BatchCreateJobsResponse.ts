import { CreateJobResp } from './CreateJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateJobsResponse extends SdkResponse {
    public results?: Array<CreateJobResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<CreateJobResp>): BatchCreateJobsResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchCreateJobsResponse {
        this['count'] = count;
        return this;
    }
}
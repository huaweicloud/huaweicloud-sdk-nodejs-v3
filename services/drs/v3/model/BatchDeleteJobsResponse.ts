import { DeleteJobResp } from './DeleteJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteJobsResponse extends SdkResponse {
    public results?: Array<DeleteJobResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<DeleteJobResp>): BatchDeleteJobsResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchDeleteJobsResponse {
        this['count'] = count;
        return this;
    }
}
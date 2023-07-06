import { PostPreCheckResp } from './PostPreCheckResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCheckJobsResponse extends SdkResponse {
    public results?: Array<PostPreCheckResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<PostPreCheckResp>): BatchCheckJobsResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchCheckJobsResponse {
        this['count'] = count;
        return this;
    }
}
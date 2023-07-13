import { QueryPreCheckResp } from './QueryPreCheckResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCheckResultsResponse extends SdkResponse {
    public results?: Array<QueryPreCheckResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<QueryPreCheckResp>): BatchCheckResultsResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchCheckResultsResponse {
        this['count'] = count;
        return this;
    }
}
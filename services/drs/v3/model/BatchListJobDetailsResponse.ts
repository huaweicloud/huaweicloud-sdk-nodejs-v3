import { QueryJobResp } from './QueryJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListJobDetailsResponse extends SdkResponse {
    public count?: number;
    public results?: Array<QueryJobResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListJobDetailsResponse {
        this['count'] = count;
        return this;
    }
    public withResults(results: Array<QueryJobResp>): BatchListJobDetailsResponse {
        this['results'] = results;
        return this;
    }
}
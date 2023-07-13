import { QueryJobStatusResp } from './QueryJobStatusResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListJobStatusResponse extends SdkResponse {
    public results?: Array<QueryJobStatusResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<QueryJobStatusResp>): BatchListJobStatusResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchListJobStatusResponse {
        this['count'] = count;
        return this;
    }
}
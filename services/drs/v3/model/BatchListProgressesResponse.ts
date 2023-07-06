import { QueryProgressResp } from './QueryProgressResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListProgressesResponse extends SdkResponse {
    public count?: number;
    public results?: Array<QueryProgressResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListProgressesResponse {
        this['count'] = count;
        return this;
    }
    public withResults(results: Array<QueryProgressResp>): BatchListProgressesResponse {
        this['results'] = results;
        return this;
    }
}
import { QueryRpoAndRtoResp } from './QueryRpoAndRtoResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListRposAndRtosResponse extends SdkResponse {
    public count?: number;
    public results?: Array<QueryRpoAndRtoResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListRposAndRtosResponse {
        this['count'] = count;
        return this;
    }
    public withResults(results: Array<QueryRpoAndRtoResp>): BatchListRposAndRtosResponse {
        this['results'] = results;
        return this;
    }
}
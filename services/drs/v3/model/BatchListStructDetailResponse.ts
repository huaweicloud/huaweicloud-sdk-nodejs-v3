import { QueryStructDetailResp } from './QueryStructDetailResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListStructDetailResponse extends SdkResponse {
    public count?: number;
    public results?: Array<QueryStructDetailResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListStructDetailResponse {
        this['count'] = count;
        return this;
    }
    public withResults(results: Array<QueryStructDetailResp>): BatchListStructDetailResponse {
        this['results'] = results;
        return this;
    }
}
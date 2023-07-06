import { QueryStructProcessResp } from './QueryStructProcessResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListStructProcessResponse extends SdkResponse {
    public results?: Array<QueryStructProcessResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<QueryStructProcessResp>): BatchListStructProcessResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchListStructProcessResponse {
        this['count'] = count;
        return this;
    }
}
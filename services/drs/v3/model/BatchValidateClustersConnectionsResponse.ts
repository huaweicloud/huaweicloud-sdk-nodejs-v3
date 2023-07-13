import { CheckJobResp } from './CheckJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchValidateClustersConnectionsResponse extends SdkResponse {
    public results?: Array<CheckJobResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<CheckJobResp>): BatchValidateClustersConnectionsResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchValidateClustersConnectionsResponse {
        this['count'] = count;
        return this;
    }
}
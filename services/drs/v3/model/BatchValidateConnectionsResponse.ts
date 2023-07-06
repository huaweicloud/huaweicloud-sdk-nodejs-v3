import { CheckJobResp } from './CheckJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchValidateConnectionsResponse extends SdkResponse {
    public results?: Array<CheckJobResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<CheckJobResp>): BatchValidateConnectionsResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchValidateConnectionsResponse {
        this['count'] = count;
        return this;
    }
}
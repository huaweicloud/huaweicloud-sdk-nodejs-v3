import { ModifyJobResp } from './ModifyJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSetSpeedResponse extends SdkResponse {
    public count?: number;
    public results?: Array<ModifyJobResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchSetSpeedResponse {
        this['count'] = count;
        return this;
    }
    public withResults(results: Array<ModifyJobResp>): BatchSetSpeedResponse {
        this['results'] = results;
        return this;
    }
}
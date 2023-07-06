import { ModifyJobResp } from './ModifyJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSetDefinerResponse extends SdkResponse {
    public count?: number;
    public results?: Array<ModifyJobResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchSetDefinerResponse {
        this['count'] = count;
        return this;
    }
    public withResults(results: Array<ModifyJobResp>): BatchSetDefinerResponse {
        this['results'] = results;
        return this;
    }
}
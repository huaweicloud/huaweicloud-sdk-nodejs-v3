import { ModifyJobResp } from './ModifyJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateJobResponse extends SdkResponse {
    public count?: number;
    public results?: Array<ModifyJobResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchUpdateJobResponse {
        this['count'] = count;
        return this;
    }
    public withResults(results: Array<ModifyJobResp>): BatchUpdateJobResponse {
        this['results'] = results;
        return this;
    }
}
import { SwitchoverResp } from './SwitchoverResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSwitchoverResponse extends SdkResponse {
    public results?: Array<SwitchoverResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<SwitchoverResp>): BatchSwitchoverResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchSwitchoverResponse {
        this['count'] = count;
        return this;
    }
}
import { SyncPolicyResp } from './SyncPolicyResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSetPolicyResponse extends SdkResponse {
    public results?: Array<SyncPolicyResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<SyncPolicyResp>): BatchSetPolicyResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchSetPolicyResponse {
        this['count'] = count;
        return this;
    }
}
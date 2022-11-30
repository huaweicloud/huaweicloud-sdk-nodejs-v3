import { L7policyResp } from './L7policyResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateL7policiesResponse extends SdkResponse {
    public l7policy?: L7policyResp;
    public constructor() { 
        super();
    }
    public withL7policy(l7policy: L7policyResp): UpdateL7policiesResponse {
        this['l7policy'] = l7policy;
        return this;
    }
}
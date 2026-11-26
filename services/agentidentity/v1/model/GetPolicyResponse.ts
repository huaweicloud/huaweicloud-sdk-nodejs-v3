import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetPolicyResponse extends SdkResponse {
    public policy?: Policy;
    public constructor() { 
        super();
    }
    public withPolicy(policy: Policy): GetPolicyResponse {
        this['policy'] = policy;
        return this;
    }
}
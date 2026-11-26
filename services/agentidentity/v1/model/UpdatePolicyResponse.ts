import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePolicyResponse extends SdkResponse {
    public policy?: Policy;
    public constructor() { 
        super();
    }
    public withPolicy(policy: Policy): UpdatePolicyResponse {
        this['policy'] = policy;
        return this;
    }
}
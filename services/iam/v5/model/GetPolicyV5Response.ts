import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetPolicyV5Response extends SdkResponse {
    public policy?: Policy;
    public constructor() { 
        super();
    }
    public withPolicy(policy: Policy): GetPolicyV5Response {
        this['policy'] = policy;
        return this;
    }
}
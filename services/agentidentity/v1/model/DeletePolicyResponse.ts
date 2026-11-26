import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePolicyResponse extends SdkResponse {
    public policy?: Policy;
    public constructor() { 
        super();
    }
    public withPolicy(policy: Policy): DeletePolicyResponse {
        this['policy'] = policy;
        return this;
    }
}
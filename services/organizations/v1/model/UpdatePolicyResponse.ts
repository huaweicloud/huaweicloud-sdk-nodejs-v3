import { PolicyDto } from './PolicyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePolicyResponse extends SdkResponse {
    public policy?: PolicyDto;
    public constructor() { 
        super();
    }
    public withPolicy(policy: PolicyDto): UpdatePolicyResponse {
        this['policy'] = policy;
        return this;
    }
}
import { PolicyDto } from './PolicyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDryRunPolicyResponse extends SdkResponse {
    public policy?: PolicyDto;
    public constructor() { 
        super();
    }
    public withPolicy(policy: PolicyDto): CreateDryRunPolicyResponse {
        this['policy'] = policy;
        return this;
    }
}
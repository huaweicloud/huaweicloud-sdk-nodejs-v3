import { PolicyDto } from './PolicyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDryRunPolicyResponse extends SdkResponse {
    public policy?: PolicyDto;
    public constructor() { 
        super();
    }
    public withPolicy(policy: PolicyDto): UpdateDryRunPolicyResponse {
        this['policy'] = policy;
        return this;
    }
}
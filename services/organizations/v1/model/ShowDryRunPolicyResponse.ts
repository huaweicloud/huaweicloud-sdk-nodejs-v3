import { PolicyDto } from './PolicyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDryRunPolicyResponse extends SdkResponse {
    public policy?: PolicyDto;
    public constructor() { 
        super();
    }
    public withPolicy(policy: PolicyDto): ShowDryRunPolicyResponse {
        this['policy'] = policy;
        return this;
    }
}
import { PolicyDto } from './PolicyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicyResponse extends SdkResponse {
    public policy?: PolicyDto;
    public constructor() { 
        super();
    }
    public withPolicy(policy: PolicyDto): ShowPolicyResponse {
        this['policy'] = policy;
        return this;
    }
}
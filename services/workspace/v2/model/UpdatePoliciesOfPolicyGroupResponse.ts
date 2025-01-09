import { Policies } from './Policies';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePoliciesOfPolicyGroupResponse extends SdkResponse {
    public policies?: Policies;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Policies): UpdatePoliciesOfPolicyGroupResponse {
        this['policies'] = policies;
        return this;
    }
}
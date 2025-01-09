import { Policies } from './Policies';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoliciesOfPolicyGroupResponse extends SdkResponse {
    public policies?: Policies;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Policies): ListPoliciesOfPolicyGroupResponse {
        this['policies'] = policies;
        return this;
    }
}
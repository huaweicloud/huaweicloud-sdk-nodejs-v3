import { Policies } from './Policies';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyOfPolicyGroupResponse extends SdkResponse {
    public policies?: Policies;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Policies): ListPolicyOfPolicyGroupResponse {
        this['policies'] = policies;
        return this;
    }
}
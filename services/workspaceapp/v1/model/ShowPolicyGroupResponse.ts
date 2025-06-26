import { PolicyGroup } from './PolicyGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicyGroupResponse extends SdkResponse {
    private 'policy_group'?: PolicyGroup;
    public constructor() { 
        super();
    }
    public withPolicyGroup(policyGroup: PolicyGroup): ShowPolicyGroupResponse {
        this['policy_group'] = policyGroup;
        return this;
    }
    public set policyGroup(policyGroup: PolicyGroup  | undefined) {
        this['policy_group'] = policyGroup;
    }
    public get policyGroup(): PolicyGroup | undefined {
        return this['policy_group'];
    }
}
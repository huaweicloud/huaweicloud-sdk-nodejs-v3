import { DynamicMaskingPolicySet } from './DynamicMaskingPolicySet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityDynamicMaskingPoliciesResponse extends SdkResponse {
    public total?: number;
    public policies?: Array<DynamicMaskingPolicySet>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityDynamicMaskingPoliciesResponse {
        this['total'] = total;
        return this;
    }
    public withPolicies(policies: Array<DynamicMaskingPolicySet>): ListSecurityDynamicMaskingPoliciesResponse {
        this['policies'] = policies;
        return this;
    }
}
import { SignPolicyDetail } from './SignPolicyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceSignPoliciesResponse extends SdkResponse {
    public policies?: Array<SignPolicyDetail>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<SignPolicyDetail>): ListInstanceSignPoliciesResponse {
        this['policies'] = policies;
        return this;
    }
    public withTotal(total: number): ListInstanceSignPoliciesResponse {
        this['total'] = total;
        return this;
    }
}
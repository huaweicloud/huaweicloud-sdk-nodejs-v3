import { AccessPolicyDetailInfo } from './AccessPolicyDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessPoliciesResponse extends SdkResponse {
    public policies?: Array<AccessPolicyDetailInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<AccessPolicyDetailInfo>): ListAccessPoliciesResponse {
        this['policies'] = policies;
        return this;
    }
    public withTotal(total: number): ListAccessPoliciesResponse {
        this['total'] = total;
        return this;
    }
}
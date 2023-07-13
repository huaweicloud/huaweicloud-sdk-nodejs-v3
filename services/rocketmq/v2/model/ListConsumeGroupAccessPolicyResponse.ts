import { ListAccessPolicyRespPolicies } from './ListAccessPolicyRespPolicies';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConsumeGroupAccessPolicyResponse extends SdkResponse {
    public policies?: Array<ListAccessPolicyRespPolicies>;
    public total?: number;
    public name?: string;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<ListAccessPolicyRespPolicies>): ListConsumeGroupAccessPolicyResponse {
        this['policies'] = policies;
        return this;
    }
    public withTotal(total: number): ListConsumeGroupAccessPolicyResponse {
        this['total'] = total;
        return this;
    }
    public withName(name: string): ListConsumeGroupAccessPolicyResponse {
        this['name'] = name;
        return this;
    }
}
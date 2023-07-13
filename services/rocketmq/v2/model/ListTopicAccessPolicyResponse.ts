import { ListAccessPolicyRespPolicies } from './ListAccessPolicyRespPolicies';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopicAccessPolicyResponse extends SdkResponse {
    public policies?: Array<ListAccessPolicyRespPolicies>;
    public total?: number;
    public name?: string;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<ListAccessPolicyRespPolicies>): ListTopicAccessPolicyResponse {
        this['policies'] = policies;
        return this;
    }
    public withTotal(total: number): ListTopicAccessPolicyResponse {
        this['total'] = total;
        return this;
    }
    public withName(name: string): ListTopicAccessPolicyResponse {
        this['name'] = name;
        return this;
    }
}
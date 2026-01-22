import { ListAccessPolicyRespPolicies } from './ListAccessPolicyRespPolicies';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConsumeGroupAccessPolicyForRocketMqResponse extends SdkResponse {
    public policies?: Array<ListAccessPolicyRespPolicies>;
    public total?: number;
    public name?: string;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<ListAccessPolicyRespPolicies>): ListConsumeGroupAccessPolicyForRocketMqResponse {
        this['policies'] = policies;
        return this;
    }
    public withTotal(total: number): ListConsumeGroupAccessPolicyForRocketMqResponse {
        this['total'] = total;
        return this;
    }
    public withName(name: string): ListConsumeGroupAccessPolicyForRocketMqResponse {
        this['name'] = name;
        return this;
    }
}
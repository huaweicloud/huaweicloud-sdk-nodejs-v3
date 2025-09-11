import { UpdatePolicyResp } from './UpdatePolicyResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAlarmRulePoliciesResponse extends SdkResponse {
    public policies?: Array<UpdatePolicyResp>;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<UpdatePolicyResp>): UpdateAlarmRulePoliciesResponse {
        this['policies'] = policies;
        return this;
    }
}
import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAlarmRulePoliciesResponse extends SdkResponse {
    public policies?: Array<Policy>;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<Policy>): UpdateAlarmRulePoliciesResponse {
        this['policies'] = policies;
        return this;
    }
}
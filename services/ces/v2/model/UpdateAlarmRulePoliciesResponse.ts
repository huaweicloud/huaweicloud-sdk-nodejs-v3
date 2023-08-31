import { UpdatePolicy } from './UpdatePolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAlarmRulePoliciesResponse extends SdkResponse {
    public policies?: Array<UpdatePolicy>;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<UpdatePolicy>): UpdateAlarmRulePoliciesResponse {
        this['policies'] = policies;
        return this;
    }
}
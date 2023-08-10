import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmRulePoliciesResponse extends SdkResponse {
    public policies?: Array<Policy>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<Policy>): ListAlarmRulePoliciesResponse {
        this['policies'] = policies;
        return this;
    }
    public withCount(count: number): ListAlarmRulePoliciesResponse {
        this['count'] = count;
        return this;
    }
}
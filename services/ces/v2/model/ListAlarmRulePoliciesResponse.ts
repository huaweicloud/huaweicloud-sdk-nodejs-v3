import { ListPolicy } from './ListPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmRulePoliciesResponse extends SdkResponse {
    public policies?: Array<ListPolicy>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<ListPolicy>): ListAlarmRulePoliciesResponse {
        this['policies'] = policies;
        return this;
    }
    public withCount(count: number): ListAlarmRulePoliciesResponse {
        this['count'] = count;
        return this;
    }
}
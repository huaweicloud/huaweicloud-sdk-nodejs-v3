import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoliciesResponse extends SdkResponse {
    public policies?: Array<Policy>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<Policy>): ListPoliciesResponse {
        this['policies'] = policies;
        return this;
    }
    public withCount(count: number): ListPoliciesResponse {
        this['count'] = count;
        return this;
    }
}
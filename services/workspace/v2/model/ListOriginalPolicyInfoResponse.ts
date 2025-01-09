import { Policies } from './Policies';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOriginalPolicyInfoResponse extends SdkResponse {
    public policies?: Policies;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Policies): ListOriginalPolicyInfoResponse {
        this['policies'] = policies;
        return this;
    }
}
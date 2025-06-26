import { Policies } from './Policies';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOriginalPolicyInfoResponse extends SdkResponse {
    public policies?: Policies;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Policies): ShowOriginalPolicyInfoResponse {
        this['policies'] = policies;
        return this;
    }
}
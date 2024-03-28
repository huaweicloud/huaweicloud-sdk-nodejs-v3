import { OrganizationPolicy } from './OrganizationPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOrganizationPolicyResponse extends SdkResponse {
    public policy?: OrganizationPolicy;
    public constructor() { 
        super();
    }
    public withPolicy(policy: OrganizationPolicy): ShowOrganizationPolicyResponse {
        this['policy'] = policy;
        return this;
    }
}
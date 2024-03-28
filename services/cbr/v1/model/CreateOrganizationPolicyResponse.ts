import { OrganizationPolicy } from './OrganizationPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOrganizationPolicyResponse extends SdkResponse {
    public policy?: OrganizationPolicy;
    public constructor() { 
        super();
    }
    public withPolicy(policy: OrganizationPolicy): CreateOrganizationPolicyResponse {
        this['policy'] = policy;
        return this;
    }
}
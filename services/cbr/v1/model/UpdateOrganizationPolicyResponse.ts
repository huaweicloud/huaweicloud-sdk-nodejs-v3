import { OrganizationPolicy } from './OrganizationPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateOrganizationPolicyResponse extends SdkResponse {
    public policy?: OrganizationPolicy;
    public constructor() { 
        super();
    }
    public withPolicy(policy: OrganizationPolicy): UpdateOrganizationPolicyResponse {
        this['policy'] = policy;
        return this;
    }
}
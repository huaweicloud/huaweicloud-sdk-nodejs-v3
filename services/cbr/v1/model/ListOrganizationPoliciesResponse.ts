import { OrganizationPolicy } from './OrganizationPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOrganizationPoliciesResponse extends SdkResponse {
    public policies?: Array<OrganizationPolicy>;
    public count?: number;
    public limit?: number;
    public offset?: number;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<OrganizationPolicy>): ListOrganizationPoliciesResponse {
        this['policies'] = policies;
        return this;
    }
    public withCount(count: number): ListOrganizationPoliciesResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): ListOrganizationPoliciesResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListOrganizationPoliciesResponse {
        this['offset'] = offset;
        return this;
    }
}
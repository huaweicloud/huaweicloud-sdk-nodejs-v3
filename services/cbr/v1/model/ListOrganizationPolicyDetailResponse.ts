import { OrganizationPolicyStatus } from './OrganizationPolicyStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOrganizationPolicyDetailResponse extends SdkResponse {
    public policies?: Array<OrganizationPolicyStatus>;
    public count?: number;
    public limit?: number;
    public offset?: number;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<OrganizationPolicyStatus>): ListOrganizationPolicyDetailResponse {
        this['policies'] = policies;
        return this;
    }
    public withCount(count: number): ListOrganizationPolicyDetailResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): ListOrganizationPolicyDetailResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListOrganizationPolicyDetailResponse {
        this['offset'] = offset;
        return this;
    }
}
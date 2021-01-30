import { Links } from './Links';
import { PolicyRoleResult } from './PolicyRoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomPoliciesResponse extends SdkResponse {
    public links?: Links;
    public roles?: Array<PolicyRoleResult>;
    private 'total_number'?: number | undefined;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): ListCustomPoliciesResponse {
        this['links'] = links;
        return this;
    }
    public withRoles(roles: Array<PolicyRoleResult>): ListCustomPoliciesResponse {
        this['roles'] = roles;
        return this;
    }
    public withTotalNumber(totalNumber: number): ListCustomPoliciesResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber() {
        return this['total_number'];
    }
}
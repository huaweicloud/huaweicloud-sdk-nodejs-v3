import { Links } from './Links';
import { ListPolicyRoleResult } from './ListPolicyRoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomPoliciesResponse extends SdkResponse {
    public links?: Links;
    public roles?: Array<ListPolicyRoleResult>;
    private 'total_number'?: number;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): ListCustomPoliciesResponse {
        this['links'] = links;
        return this;
    }
    public withRoles(roles: Array<ListPolicyRoleResult>): ListCustomPoliciesResponse {
        this['roles'] = roles;
        return this;
    }
    public withTotalNumber(totalNumber: number): ListCustomPoliciesResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
}
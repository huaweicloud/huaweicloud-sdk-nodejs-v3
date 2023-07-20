import { Links } from './Links';
import { RoleResult } from './RoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListPermissionsResponse extends SdkResponse {
    public links?: Links;
    public roles?: Array<RoleResult>;
    private 'total_number'?: number;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): KeystoneListPermissionsResponse {
        this['links'] = links;
        return this;
    }
    public withRoles(roles: Array<RoleResult>): KeystoneListPermissionsResponse {
        this['roles'] = roles;
        return this;
    }
    public withTotalNumber(totalNumber: number): KeystoneListPermissionsResponse {
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
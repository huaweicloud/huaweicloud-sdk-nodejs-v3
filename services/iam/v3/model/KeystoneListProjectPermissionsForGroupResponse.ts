import { Links } from './Links';
import { RoleResult } from './RoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListProjectPermissionsForGroupResponse extends SdkResponse {
    public links?: Links;
    public roles?: Array<RoleResult>;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): KeystoneListProjectPermissionsForGroupResponse {
        this['links'] = links;
        return this;
    }
    public withRoles(roles: Array<RoleResult>): KeystoneListProjectPermissionsForGroupResponse {
        this['roles'] = roles;
        return this;
    }
}
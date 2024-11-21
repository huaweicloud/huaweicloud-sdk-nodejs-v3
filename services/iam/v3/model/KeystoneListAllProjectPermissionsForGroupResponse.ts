import { InheritedRoleResult } from './InheritedRoleResult';
import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListAllProjectPermissionsForGroupResponse extends SdkResponse {
    public links?: Links;
    public roles?: Array<InheritedRoleResult>;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): KeystoneListAllProjectPermissionsForGroupResponse {
        this['links'] = links;
        return this;
    }
    public withRoles(roles: Array<InheritedRoleResult>): KeystoneListAllProjectPermissionsForGroupResponse {
        this['roles'] = roles;
        return this;
    }
}
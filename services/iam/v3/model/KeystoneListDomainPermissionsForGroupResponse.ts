import { Links } from './Links';
import { RoleResult } from './RoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListDomainPermissionsForGroupResponse extends SdkResponse {
    public links?: Links;
    public roles?: Array<RoleResult>;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): KeystoneListDomainPermissionsForGroupResponse {
        this['links'] = links;
        return this;
    }
    public withRoles(roles: Array<RoleResult>): KeystoneListDomainPermissionsForGroupResponse {
        this['roles'] = roles;
        return this;
    }
}
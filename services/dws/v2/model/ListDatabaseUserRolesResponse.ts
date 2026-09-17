import { RoleMember } from './RoleMember';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseUserRolesResponse extends SdkResponse {
    public roles?: Array<RoleMember>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withRoles(roles: Array<RoleMember>): ListDatabaseUserRolesResponse {
        this['roles'] = roles;
        return this;
    }
    public withCount(count: number): ListDatabaseUserRolesResponse {
        this['count'] = count;
        return this;
    }
}
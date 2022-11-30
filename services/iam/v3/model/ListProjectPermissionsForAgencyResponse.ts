import { RoleResult } from './RoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectPermissionsForAgencyResponse extends SdkResponse {
    public roles?: Array<RoleResult>;
    public constructor() { 
        super();
    }
    public withRoles(roles: Array<RoleResult>): ListProjectPermissionsForAgencyResponse {
        this['roles'] = roles;
        return this;
    }
}
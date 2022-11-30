import { RolesItem } from './RolesItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRolesForGroupOnEnterpriseProjectResponse extends SdkResponse {
    public roles?: Array<RolesItem>;
    public constructor() { 
        super();
    }
    public withRoles(roles: Array<RolesItem>): ListRolesForGroupOnEnterpriseProjectResponse {
        this['roles'] = roles;
        return this;
    }
}
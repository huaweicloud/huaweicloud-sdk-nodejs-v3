
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseUserRoleResponse extends SdkResponse {
    public roles?: Array<string>;
    public constructor() { 
        super();
    }
    public withRoles(roles: Array<string>): ListDatabaseUserRoleResponse {
        this['roles'] = roles;
        return this;
    }
}
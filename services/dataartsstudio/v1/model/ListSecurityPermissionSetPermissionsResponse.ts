import { PermissionSetPermission } from './PermissionSetPermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityPermissionSetPermissionsResponse extends SdkResponse {
    public total?: number;
    public permissions?: Array<PermissionSetPermission>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityPermissionSetPermissionsResponse {
        this['total'] = total;
        return this;
    }
    public withPermissions(permissions: Array<PermissionSetPermission>): ListSecurityPermissionSetPermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
}
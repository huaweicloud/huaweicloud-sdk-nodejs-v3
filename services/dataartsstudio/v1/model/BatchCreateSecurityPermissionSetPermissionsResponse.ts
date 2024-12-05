import { PermissionSetPermission } from './PermissionSetPermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateSecurityPermissionSetPermissionsResponse extends SdkResponse {
    public total?: number;
    public permissions?: Array<PermissionSetPermission>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): BatchCreateSecurityPermissionSetPermissionsResponse {
        this['total'] = total;
        return this;
    }
    public withPermissions(permissions: Array<PermissionSetPermission>): BatchCreateSecurityPermissionSetPermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
}
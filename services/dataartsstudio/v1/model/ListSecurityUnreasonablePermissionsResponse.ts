import { DiagnosePermissionDetail } from './DiagnosePermissionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityUnreasonablePermissionsResponse extends SdkResponse {
    public total?: number;
    private 'unreasonable_permissions'?: Array<DiagnosePermissionDetail>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityUnreasonablePermissionsResponse {
        this['total'] = total;
        return this;
    }
    public withUnreasonablePermissions(unreasonablePermissions: Array<DiagnosePermissionDetail>): ListSecurityUnreasonablePermissionsResponse {
        this['unreasonable_permissions'] = unreasonablePermissions;
        return this;
    }
    public set unreasonablePermissions(unreasonablePermissions: Array<DiagnosePermissionDetail>  | undefined) {
        this['unreasonable_permissions'] = unreasonablePermissions;
    }
    public get unreasonablePermissions(): Array<DiagnosePermissionDetail> | undefined {
        return this['unreasonable_permissions'];
    }
}
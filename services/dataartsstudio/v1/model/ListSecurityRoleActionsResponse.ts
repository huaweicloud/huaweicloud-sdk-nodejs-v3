import { PermissionActions } from './PermissionActions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityRoleActionsResponse extends SdkResponse {
    private 'permission_actions'?: Array<PermissionActions>;
    public constructor() { 
        super();
    }
    public withPermissionActions(permissionActions: Array<PermissionActions>): ListSecurityRoleActionsResponse {
        this['permission_actions'] = permissionActions;
        return this;
    }
    public set permissionActions(permissionActions: Array<PermissionActions>  | undefined) {
        this['permission_actions'] = permissionActions;
    }
    public get permissionActions(): Array<PermissionActions> | undefined {
        return this['permission_actions'];
    }
}
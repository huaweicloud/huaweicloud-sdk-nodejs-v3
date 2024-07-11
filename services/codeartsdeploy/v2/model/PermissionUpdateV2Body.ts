

export class PermissionUpdateV2Body {
    private 'project_id'?: string;
    private 'role_id'?: string;
    private 'permission_name'?: PermissionUpdateV2BodyPermissionNameEnum | string;
    private 'permission_value'?: boolean;
    public constructor(projectId?: string, roleId?: string, permissionName?: string, permissionValue?: boolean) { 
        this['project_id'] = projectId;
        this['role_id'] = roleId;
        this['permission_name'] = permissionName;
        this['permission_value'] = permissionValue;
    }
    public withProjectId(projectId: string): PermissionUpdateV2Body {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRoleId(roleId: string): PermissionUpdateV2Body {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withPermissionName(permissionName: PermissionUpdateV2BodyPermissionNameEnum | string): PermissionUpdateV2Body {
        this['permission_name'] = permissionName;
        return this;
    }
    public set permissionName(permissionName: PermissionUpdateV2BodyPermissionNameEnum | string  | undefined) {
        this['permission_name'] = permissionName;
    }
    public get permissionName(): PermissionUpdateV2BodyPermissionNameEnum | string | undefined {
        return this['permission_name'];
    }
    public withPermissionValue(permissionValue: boolean): PermissionUpdateV2Body {
        this['permission_value'] = permissionValue;
        return this;
    }
    public set permissionValue(permissionValue: boolean  | undefined) {
        this['permission_value'] = permissionValue;
    }
    public get permissionValue(): boolean | undefined {
        return this['permission_value'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionUpdateV2BodyPermissionNameEnum {
    CAN_VIEW = 'can_view',
    CAN_EDIT = 'can_edit',
    CAN_DELETE = 'can_delete',
    CAN_ADD_HOST = 'can_add_host',
    CAN_MANAGE = 'can_manage',
    CAN_COPY = 'can_copy'
}

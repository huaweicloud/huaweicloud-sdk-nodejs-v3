

export class EnvironmentPermissionV2Body {
    private 'role_id'?: string;
    private 'permission_name'?: EnvironmentPermissionV2BodyPermissionNameEnum | string;
    private 'permission_value'?: boolean;
    public constructor() { 
    }
    public withRoleId(roleId: string): EnvironmentPermissionV2Body {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withPermissionName(permissionName: EnvironmentPermissionV2BodyPermissionNameEnum | string): EnvironmentPermissionV2Body {
        this['permission_name'] = permissionName;
        return this;
    }
    public set permissionName(permissionName: EnvironmentPermissionV2BodyPermissionNameEnum | string  | undefined) {
        this['permission_name'] = permissionName;
    }
    public get permissionName(): EnvironmentPermissionV2BodyPermissionNameEnum | string | undefined {
        return this['permission_name'];
    }
    public withPermissionValue(permissionValue: boolean): EnvironmentPermissionV2Body {
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
export enum EnvironmentPermissionV2BodyPermissionNameEnum {
    CAN_VIEW = 'can_view',
    CAN_EDIT = 'can_edit',
    CAN_DELETE = 'can_delete',
    CAN_DEPLOY = 'can_deploy',
    CAN_MANAGE = 'can_manage'
}

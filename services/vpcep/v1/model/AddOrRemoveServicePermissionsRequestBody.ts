

export class AddOrRemoveServicePermissionsRequestBody {
    public permissions: Array<string>;
    private 'permission_type'?: AddOrRemoveServicePermissionsRequestBodyPermissionTypeEnum | undefined;
    public action: AddOrRemoveServicePermissionsRequestBodyActionEnum;
    public constructor(permissions?: any, action?: any) { 
        this['permissions'] = permissions;
        this['action'] = action;
    }
    public withPermissions(permissions: Array<string>): AddOrRemoveServicePermissionsRequestBody {
        this['permissions'] = permissions;
        return this;
    }
    public withPermissionType(permissionType: AddOrRemoveServicePermissionsRequestBodyPermissionTypeEnum): AddOrRemoveServicePermissionsRequestBody {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: AddOrRemoveServicePermissionsRequestBodyPermissionTypeEnum | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType() {
        return this['permission_type'];
    }
    public withAction(action: AddOrRemoveServicePermissionsRequestBodyActionEnum): AddOrRemoveServicePermissionsRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddOrRemoveServicePermissionsRequestBodyPermissionTypeEnum {
    DOMAINID = 'domainId',
    ORGPATH = 'orgPath'
}
/**
    * @export
    * @enum {string}
    */
export enum AddOrRemoveServicePermissionsRequestBodyActionEnum {
    ADD = 'add',
    REMOVE = 'remove'
}

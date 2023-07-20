

export class AddOrRemoveServicePermissionsRequestBody {
    public permissions?: Array<string>;
    private 'permission_type'?: AddOrRemoveServicePermissionsRequestBodyPermissionTypeEnum | string;
    public action?: AddOrRemoveServicePermissionsRequestBodyActionEnum | string;
    public constructor(permissions?: Array<string>, action?: string) { 
        this['permissions'] = permissions;
        this['action'] = action;
    }
    public withPermissions(permissions: Array<string>): AddOrRemoveServicePermissionsRequestBody {
        this['permissions'] = permissions;
        return this;
    }
    public withPermissionType(permissionType: AddOrRemoveServicePermissionsRequestBodyPermissionTypeEnum | string): AddOrRemoveServicePermissionsRequestBody {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: AddOrRemoveServicePermissionsRequestBodyPermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): AddOrRemoveServicePermissionsRequestBodyPermissionTypeEnum | string | undefined {
        return this['permission_type'];
    }
    public withAction(action: AddOrRemoveServicePermissionsRequestBodyActionEnum | string): AddOrRemoveServicePermissionsRequestBody {
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

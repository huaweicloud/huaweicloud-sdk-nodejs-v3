

export class UpdateInternalEndpointPermissionsRequestBody {
    public permissions?: Array<string>;
    public action?: UpdateInternalEndpointPermissionsRequestBodyActionEnum | string;
    private 'permission_type'?: UpdateInternalEndpointPermissionsRequestBodyPermissionTypeEnum | string;
    public constructor(permissions?: Array<string>, action?: string) { 
        this['permissions'] = permissions;
        this['action'] = action;
    }
    public withPermissions(permissions: Array<string>): UpdateInternalEndpointPermissionsRequestBody {
        this['permissions'] = permissions;
        return this;
    }
    public withAction(action: UpdateInternalEndpointPermissionsRequestBodyActionEnum | string): UpdateInternalEndpointPermissionsRequestBody {
        this['action'] = action;
        return this;
    }
    public withPermissionType(permissionType: UpdateInternalEndpointPermissionsRequestBodyPermissionTypeEnum | string): UpdateInternalEndpointPermissionsRequestBody {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: UpdateInternalEndpointPermissionsRequestBodyPermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): UpdateInternalEndpointPermissionsRequestBodyPermissionTypeEnum | string | undefined {
        return this['permission_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateInternalEndpointPermissionsRequestBodyActionEnum {
    ADD = 'add',
    REMOVE = 'remove'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateInternalEndpointPermissionsRequestBodyPermissionTypeEnum {
    DOMAINID = 'domainId',
    ORGPATH = 'orgPath'
}


import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddOrRemoveServicePermissionsResponse extends SdkResponse {
    public permissions?: Array<string>;
    private 'permission_type'?: AddOrRemoveServicePermissionsResponsePermissionTypeEnum | undefined;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<string>): AddOrRemoveServicePermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withPermissionType(permissionType: AddOrRemoveServicePermissionsResponsePermissionTypeEnum): AddOrRemoveServicePermissionsResponse {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: AddOrRemoveServicePermissionsResponsePermissionTypeEnum | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType() {
        return this['permission_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddOrRemoveServicePermissionsResponsePermissionTypeEnum {
    DOMAINID = 'domainId',
    ORGPATH = 'orgPath'
}

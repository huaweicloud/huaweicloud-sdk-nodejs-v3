
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddOrRemoveServicePermissionsResponse extends SdkResponse {
    public permissions?: Array<string>;
    private 'permission_type'?: AddOrRemoveServicePermissionsResponsePermissionTypeEnum | string;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<string>): AddOrRemoveServicePermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withPermissionType(permissionType: AddOrRemoveServicePermissionsResponsePermissionTypeEnum | string): AddOrRemoveServicePermissionsResponse {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: AddOrRemoveServicePermissionsResponsePermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): AddOrRemoveServicePermissionsResponsePermissionTypeEnum | string | undefined {
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

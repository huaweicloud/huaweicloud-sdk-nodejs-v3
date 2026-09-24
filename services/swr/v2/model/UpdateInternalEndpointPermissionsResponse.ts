
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInternalEndpointPermissionsResponse extends SdkResponse {
    public permissions?: Array<string>;
    private 'permission_type'?: UpdateInternalEndpointPermissionsResponsePermissionTypeEnum | string;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<string>): UpdateInternalEndpointPermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withPermissionType(permissionType: UpdateInternalEndpointPermissionsResponsePermissionTypeEnum | string): UpdateInternalEndpointPermissionsResponse {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: UpdateInternalEndpointPermissionsResponsePermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): UpdateInternalEndpointPermissionsResponsePermissionTypeEnum | string | undefined {
        return this['permission_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateInternalEndpointPermissionsResponsePermissionTypeEnum {
    DOMAINID = 'domainId',
    ORGPATH = 'orgPath'
}

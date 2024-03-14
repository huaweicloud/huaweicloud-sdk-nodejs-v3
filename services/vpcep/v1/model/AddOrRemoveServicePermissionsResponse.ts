
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddOrRemoveServicePermissionsResponse extends SdkResponse {
    public permissions?: Array<string>;
    private 'permission_type'?: string;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<string>): AddOrRemoveServicePermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withPermissionType(permissionType: string): AddOrRemoveServicePermissionsResponse {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): string | undefined {
        return this['permission_type'];
    }
}
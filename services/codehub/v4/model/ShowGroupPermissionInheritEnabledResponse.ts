
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupPermissionInheritEnabledResponse extends SdkResponse {
    private 'permission_inherit_enabled'?: boolean;
    public constructor() { 
        super();
    }
    public withPermissionInheritEnabled(permissionInheritEnabled: boolean): ShowGroupPermissionInheritEnabledResponse {
        this['permission_inherit_enabled'] = permissionInheritEnabled;
        return this;
    }
    public set permissionInheritEnabled(permissionInheritEnabled: boolean  | undefined) {
        this['permission_inherit_enabled'] = permissionInheritEnabled;
    }
    public get permissionInheritEnabled(): boolean | undefined {
        return this['permission_inherit_enabled'];
    }
}
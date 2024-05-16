import { Permission } from './Permission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPermissionResponse extends SdkResponse {
    public permission?: Permission;
    public constructor() { 
        super();
    }
    public withPermission(permission: Permission): ShowPermissionResponse {
        this['permission'] = permission;
        return this;
    }
}
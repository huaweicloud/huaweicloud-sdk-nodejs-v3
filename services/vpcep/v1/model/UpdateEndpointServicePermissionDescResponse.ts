import { EpsPermission } from './EpsPermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEndpointServicePermissionDescResponse extends SdkResponse {
    public permissions?: Array<EpsPermission>;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<EpsPermission>): UpdateEndpointServicePermissionDescResponse {
        this['permissions'] = permissions;
        return this;
    }
}
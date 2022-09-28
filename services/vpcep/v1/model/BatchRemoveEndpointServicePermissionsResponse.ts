import { EpsPermission } from './EpsPermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRemoveEndpointServicePermissionsResponse extends SdkResponse {
    public permissions?: Array<EpsPermission>;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<EpsPermission>): BatchRemoveEndpointServicePermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
}
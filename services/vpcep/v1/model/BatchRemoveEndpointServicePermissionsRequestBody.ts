import { EpsRemovePermissionRequest } from './EpsRemovePermissionRequest';


export class BatchRemoveEndpointServicePermissionsRequestBody {
    public permissions?: Array<EpsRemovePermissionRequest>;
    public constructor(permissions?: Array<EpsRemovePermissionRequest>) { 
        this['permissions'] = permissions;
    }
    public withPermissions(permissions: Array<EpsRemovePermissionRequest>): BatchRemoveEndpointServicePermissionsRequestBody {
        this['permissions'] = permissions;
        return this;
    }
}
import { EpsRemovePermissionRequest } from './EpsRemovePermissionRequest';


export class BatchRemovePermissionRequest {
    public permissions?: Array<EpsRemovePermissionRequest>;
    public constructor(permissions?: Array<EpsRemovePermissionRequest>) { 
        this['permissions'] = permissions;
    }
    public withPermissions(permissions: Array<EpsRemovePermissionRequest>): BatchRemovePermissionRequest {
        this['permissions'] = permissions;
        return this;
    }
}
import { EpsAddPermissionRequest } from './EpsAddPermissionRequest';


export class BatchAddPermissionRequest {
    public permissions: Array<EpsAddPermissionRequest>;
    public constructor(permissions?: any) { 
        this['permissions'] = permissions;
    }
    public withPermissions(permissions: Array<EpsAddPermissionRequest>): BatchAddPermissionRequest {
        this['permissions'] = permissions;
        return this;
    }
}
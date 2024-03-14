import { EpsUpdatePermissionDesc } from './EpsUpdatePermissionDesc';


export class UpdateEndpointServicePermissionDescRequestBody {
    public permission?: EpsUpdatePermissionDesc;
    public constructor(permission?: EpsUpdatePermissionDesc) { 
        this['permission'] = permission;
    }
    public withPermission(permission: EpsUpdatePermissionDesc): UpdateEndpointServicePermissionDescRequestBody {
        this['permission'] = permission;
        return this;
    }
}
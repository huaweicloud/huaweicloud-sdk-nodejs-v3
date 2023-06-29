import { EpsAddPermissionRequest } from './EpsAddPermissionRequest';


export class BatchAddPermissionRequest {
    public permissions: Array<EpsAddPermissionRequest>;
    private 'permission_type'?: BatchAddPermissionRequestPermissionTypeEnum | undefined;
    public constructor(permissions?: any) { 
        this['permissions'] = permissions;
    }
    public withPermissions(permissions: Array<EpsAddPermissionRequest>): BatchAddPermissionRequest {
        this['permissions'] = permissions;
        return this;
    }
    public withPermissionType(permissionType: BatchAddPermissionRequestPermissionTypeEnum): BatchAddPermissionRequest {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: BatchAddPermissionRequestPermissionTypeEnum | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType() {
        return this['permission_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchAddPermissionRequestPermissionTypeEnum {
    DOMAINID = 'domainId',
    ORGPATH = 'orgPath'
}

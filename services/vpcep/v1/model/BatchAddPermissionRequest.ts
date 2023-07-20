import { EpsAddPermissionRequest } from './EpsAddPermissionRequest';


export class BatchAddPermissionRequest {
    public permissions?: Array<EpsAddPermissionRequest>;
    private 'permission_type'?: BatchAddPermissionRequestPermissionTypeEnum | string;
    public constructor(permissions?: Array<EpsAddPermissionRequest>) { 
        this['permissions'] = permissions;
    }
    public withPermissions(permissions: Array<EpsAddPermissionRequest>): BatchAddPermissionRequest {
        this['permissions'] = permissions;
        return this;
    }
    public withPermissionType(permissionType: BatchAddPermissionRequestPermissionTypeEnum | string): BatchAddPermissionRequest {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: BatchAddPermissionRequestPermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): BatchAddPermissionRequestPermissionTypeEnum | string | undefined {
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

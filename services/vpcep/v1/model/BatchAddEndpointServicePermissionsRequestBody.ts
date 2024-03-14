import { EpsAddPermissionRequest } from './EpsAddPermissionRequest';


export class BatchAddEndpointServicePermissionsRequestBody {
    public permissions?: Array<EpsAddPermissionRequest>;
    private 'permission_type'?: BatchAddEndpointServicePermissionsRequestBodyPermissionTypeEnum | string;
    public constructor(permissions?: Array<EpsAddPermissionRequest>) { 
        this['permissions'] = permissions;
    }
    public withPermissions(permissions: Array<EpsAddPermissionRequest>): BatchAddEndpointServicePermissionsRequestBody {
        this['permissions'] = permissions;
        return this;
    }
    public withPermissionType(permissionType: BatchAddEndpointServicePermissionsRequestBodyPermissionTypeEnum | string): BatchAddEndpointServicePermissionsRequestBody {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: BatchAddEndpointServicePermissionsRequestBodyPermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): BatchAddEndpointServicePermissionsRequestBodyPermissionTypeEnum | string | undefined {
        return this['permission_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchAddEndpointServicePermissionsRequestBodyPermissionTypeEnum {
    DOMAINID = 'domainId',
    ORGPATH = 'orgPath'
}

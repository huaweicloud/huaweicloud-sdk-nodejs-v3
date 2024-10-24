

export class ListPermissionsRequest {
    private 'X-Security-Token'?: string;
    public limit?: number;
    public marker?: string;
    private 'resource_type'?: string;
    private 'permission_type'?: ListPermissionsRequestPermissionTypeEnum | string;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ListPermissionsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withLimit(limit: number): ListPermissionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPermissionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withResourceType(resourceType: string): ListPermissionsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withPermissionType(permissionType: ListPermissionsRequestPermissionTypeEnum | string): ListPermissionsRequest {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: ListPermissionsRequestPermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): ListPermissionsRequestPermissionTypeEnum | string | undefined {
        return this['permission_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPermissionsRequestPermissionTypeEnum {
    RAM_MANAGED = 'RAM_MANAGED',
    CUSTOMER_MANAGED = 'CUSTOMER_MANAGED',
    ALL = 'ALL'
}

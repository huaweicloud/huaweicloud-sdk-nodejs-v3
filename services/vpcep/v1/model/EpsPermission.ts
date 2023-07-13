

export class EpsPermission {
    public id?: string;
    public permission?: string;
    private 'permission_type'?: EpsPermissionPermissionTypeEnum | undefined;
    public description?: string;
    private 'created_at'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): EpsPermission {
        this['id'] = id;
        return this;
    }
    public withPermission(permission: string): EpsPermission {
        this['permission'] = permission;
        return this;
    }
    public withPermissionType(permissionType: EpsPermissionPermissionTypeEnum): EpsPermission {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: EpsPermissionPermissionTypeEnum | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType() {
        return this['permission_type'];
    }
    public withDescription(description: string): EpsPermission {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): EpsPermission {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EpsPermissionPermissionTypeEnum {
    DOMAINID = 'domainId',
    ORGPATH = 'orgPath'
}

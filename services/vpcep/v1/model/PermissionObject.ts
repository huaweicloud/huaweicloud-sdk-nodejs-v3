

export class PermissionObject {
    public id?: string;
    public permission?: string;
    private 'permission_type'?: PermissionObjectPermissionTypeEnum | string;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withId(id: string): PermissionObject {
        this['id'] = id;
        return this;
    }
    public withPermission(permission: string): PermissionObject {
        this['permission'] = permission;
        return this;
    }
    public withPermissionType(permissionType: PermissionObjectPermissionTypeEnum | string): PermissionObject {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: PermissionObjectPermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): PermissionObjectPermissionTypeEnum | string | undefined {
        return this['permission_type'];
    }
    public withCreatedAt(createdAt: string): PermissionObject {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionObjectPermissionTypeEnum {
    DOMAINID = 'domainId',
    ORGPATH = 'orgPath'
}

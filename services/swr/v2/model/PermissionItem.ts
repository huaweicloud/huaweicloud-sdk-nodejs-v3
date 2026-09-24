

export class PermissionItem {
    public id?: string;
    public permission?: string;
    private 'permission_type'?: PermissionItemPermissionTypeEnum | string;
    private 'created_at'?: string;
    private 'protected'?: boolean;
    public constructor() { 
    }
    public withId(id: string): PermissionItem {
        this['id'] = id;
        return this;
    }
    public withPermission(permission: string): PermissionItem {
        this['permission'] = permission;
        return this;
    }
    public withPermissionType(permissionType: PermissionItemPermissionTypeEnum | string): PermissionItem {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: PermissionItemPermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): PermissionItemPermissionTypeEnum | string | undefined {
        return this['permission_type'];
    }
    public withCreatedAt(createdAt: string): PermissionItem {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withProtected(_protected: boolean): PermissionItem {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean  | undefined) {
        this['protected'] = _protected;
    }
    public get _protected(): boolean | undefined {
        return this['protected'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionItemPermissionTypeEnum {
    DOMAINID = 'domainId',
    ORGPATH = 'orgPath'
}

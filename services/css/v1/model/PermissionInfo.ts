

export class PermissionInfo {
    public id?: string;
    public permission?: string;
    private 'permission_type'?: string;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withId(id: string): PermissionInfo {
        this['id'] = id;
        return this;
    }
    public withPermission(permission: string): PermissionInfo {
        this['permission'] = permission;
        return this;
    }
    public withPermissionType(permissionType: string): PermissionInfo {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): string | undefined {
        return this['permission_type'];
    }
    public withCreatedAt(createdAt: string): PermissionInfo {
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
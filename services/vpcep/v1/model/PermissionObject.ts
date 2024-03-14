

export class PermissionObject {
    public id?: string;
    public permission?: string;
    private 'permission_type'?: string;
    private 'created_at'?: Date;
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
    public withPermissionType(permissionType: string): PermissionObject {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): string | undefined {
        return this['permission_type'];
    }
    public withCreatedAt(createdAt: Date): PermissionObject {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}
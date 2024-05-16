

export class AssociatedPermission {
    private 'permission_id'?: string;
    private 'permission_name'?: string;
    private 'resource_type'?: string;
    public status?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withPermissionId(permissionId: string): AssociatedPermission {
        this['permission_id'] = permissionId;
        return this;
    }
    public set permissionId(permissionId: string  | undefined) {
        this['permission_id'] = permissionId;
    }
    public get permissionId(): string | undefined {
        return this['permission_id'];
    }
    public withPermissionName(permissionName: string): AssociatedPermission {
        this['permission_name'] = permissionName;
        return this;
    }
    public set permissionName(permissionName: string  | undefined) {
        this['permission_name'] = permissionName;
    }
    public get permissionName(): string | undefined {
        return this['permission_name'];
    }
    public withResourceType(resourceType: string): AssociatedPermission {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withStatus(status: string): AssociatedPermission {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): AssociatedPermission {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): AssociatedPermission {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}
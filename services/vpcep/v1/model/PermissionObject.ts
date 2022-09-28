

export class PermissionObject {
    public id?: string;
    public permission?: string;
    private 'created_at'?: string | undefined;
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
    public withCreatedAt(createdAt: string): PermissionObject {
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
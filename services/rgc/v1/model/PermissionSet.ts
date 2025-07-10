

export class PermissionSet {
    private 'permission_set_id'?: string;
    private 'permission_set_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withPermissionSetId(permissionSetId: string): PermissionSet {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withPermissionSetName(permissionSetName: string): PermissionSet {
        this['permission_set_name'] = permissionSetName;
        return this;
    }
    public set permissionSetName(permissionSetName: string  | undefined) {
        this['permission_set_name'] = permissionSetName;
    }
    public get permissionSetName(): string | undefined {
        return this['permission_set_name'];
    }
    public withDescription(description: string): PermissionSet {
        this['description'] = description;
        return this;
    }
}
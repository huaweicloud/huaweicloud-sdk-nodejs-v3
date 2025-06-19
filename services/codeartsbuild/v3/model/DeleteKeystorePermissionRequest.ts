

export class DeleteKeystorePermissionRequest {
    private 'permission_id'?: string;
    public constructor(permissionId?: string) { 
        this['permission_id'] = permissionId;
    }
    public withPermissionId(permissionId: string): DeleteKeystorePermissionRequest {
        this['permission_id'] = permissionId;
        return this;
    }
    public set permissionId(permissionId: string  | undefined) {
        this['permission_id'] = permissionId;
    }
    public get permissionId(): string | undefined {
        return this['permission_id'];
    }
}
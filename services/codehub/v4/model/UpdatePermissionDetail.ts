

export class UpdatePermissionDetail {
    private 'permission_id'?: number;
    public enabled?: boolean;
    public constructor() { 
    }
    public withPermissionId(permissionId: number): UpdatePermissionDetail {
        this['permission_id'] = permissionId;
        return this;
    }
    public set permissionId(permissionId: number  | undefined) {
        this['permission_id'] = permissionId;
    }
    public get permissionId(): number | undefined {
        return this['permission_id'];
    }
    public withEnabled(enabled: boolean): UpdatePermissionDetail {
        this['enabled'] = enabled;
        return this;
    }
}
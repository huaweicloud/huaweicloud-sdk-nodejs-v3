

export class DisassociatePermissionReqBody {
    private 'permission_id'?: string;
    public constructor(permissionId?: string) { 
        this['permission_id'] = permissionId;
    }
    public withPermissionId(permissionId: string): DisassociatePermissionReqBody {
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
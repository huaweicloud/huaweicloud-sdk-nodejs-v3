

export class AssociatePermissionReqBody {
    public replace?: boolean;
    private 'permission_id'?: string;
    public constructor(permissionId?: string) { 
        this['permission_id'] = permissionId;
    }
    public withReplace(replace: boolean): AssociatePermissionReqBody {
        this['replace'] = replace;
        return this;
    }
    public withPermissionId(permissionId: string): AssociatePermissionReqBody {
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
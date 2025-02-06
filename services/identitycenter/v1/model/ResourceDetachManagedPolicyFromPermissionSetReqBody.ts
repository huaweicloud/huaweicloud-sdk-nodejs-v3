

export class ResourceDetachManagedPolicyFromPermissionSetReqBody {
    private 'managed_role_id'?: string;
    public constructor(managedRoleId?: string) { 
        this['managed_role_id'] = managedRoleId;
    }
    public withManagedRoleId(managedRoleId: string): ResourceDetachManagedPolicyFromPermissionSetReqBody {
        this['managed_role_id'] = managedRoleId;
        return this;
    }
    public set managedRoleId(managedRoleId: string  | undefined) {
        this['managed_role_id'] = managedRoleId;
    }
    public get managedRoleId(): string | undefined {
        return this['managed_role_id'];
    }
}
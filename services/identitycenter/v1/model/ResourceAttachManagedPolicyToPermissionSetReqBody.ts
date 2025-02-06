

export class ResourceAttachManagedPolicyToPermissionSetReqBody {
    private 'managed_role_id'?: string;
    private 'managed_role_name'?: string;
    public constructor(managedRoleId?: string) { 
        this['managed_role_id'] = managedRoleId;
    }
    public withManagedRoleId(managedRoleId: string): ResourceAttachManagedPolicyToPermissionSetReqBody {
        this['managed_role_id'] = managedRoleId;
        return this;
    }
    public set managedRoleId(managedRoleId: string  | undefined) {
        this['managed_role_id'] = managedRoleId;
    }
    public get managedRoleId(): string | undefined {
        return this['managed_role_id'];
    }
    public withManagedRoleName(managedRoleName: string): ResourceAttachManagedPolicyToPermissionSetReqBody {
        this['managed_role_name'] = managedRoleName;
        return this;
    }
    public set managedRoleName(managedRoleName: string  | undefined) {
        this['managed_role_name'] = managedRoleName;
    }
    public get managedRoleName(): string | undefined {
        return this['managed_role_name'];
    }
}
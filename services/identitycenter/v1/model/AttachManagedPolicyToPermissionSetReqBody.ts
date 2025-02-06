

export class AttachManagedPolicyToPermissionSetReqBody {
    private 'managed_policy_id'?: string;
    private 'managed_policy_name'?: string;
    public constructor(managedPolicyId?: string) { 
        this['managed_policy_id'] = managedPolicyId;
    }
    public withManagedPolicyId(managedPolicyId: string): AttachManagedPolicyToPermissionSetReqBody {
        this['managed_policy_id'] = managedPolicyId;
        return this;
    }
    public set managedPolicyId(managedPolicyId: string  | undefined) {
        this['managed_policy_id'] = managedPolicyId;
    }
    public get managedPolicyId(): string | undefined {
        return this['managed_policy_id'];
    }
    public withManagedPolicyName(managedPolicyName: string): AttachManagedPolicyToPermissionSetReqBody {
        this['managed_policy_name'] = managedPolicyName;
        return this;
    }
    public set managedPolicyName(managedPolicyName: string  | undefined) {
        this['managed_policy_name'] = managedPolicyName;
    }
    public get managedPolicyName(): string | undefined {
        return this['managed_policy_name'];
    }
}


export class DetachManagedPolicyFromPermissionSetReqBody {
    private 'managed_policy_id'?: string;
    public constructor(managedPolicyId?: string) { 
        this['managed_policy_id'] = managedPolicyId;
    }
    public withManagedPolicyId(managedPolicyId: string): DetachManagedPolicyFromPermissionSetReqBody {
        this['managed_policy_id'] = managedPolicyId;
        return this;
    }
    public set managedPolicyId(managedPolicyId: string  | undefined) {
        this['managed_policy_id'] = managedPolicyId;
    }
    public get managedPolicyId(): string | undefined {
        return this['managed_policy_id'];
    }
}
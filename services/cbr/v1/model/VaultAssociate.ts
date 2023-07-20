

export class VaultAssociate {
    private 'destination_vault_id'?: string;
    private 'policy_id'?: string;
    private 'add_policy_ids'?: Array<string>;
    public constructor() { 
    }
    public withDestinationVaultId(destinationVaultId: string): VaultAssociate {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string  | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId(): string | undefined {
        return this['destination_vault_id'];
    }
    public withPolicyId(policyId: string): VaultAssociate {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withAddPolicyIds(addPolicyIds: Array<string>): VaultAssociate {
        this['add_policy_ids'] = addPolicyIds;
        return this;
    }
    public set addPolicyIds(addPolicyIds: Array<string>  | undefined) {
        this['add_policy_ids'] = addPolicyIds;
    }
    public get addPolicyIds(): Array<string> | undefined {
        return this['add_policy_ids'];
    }
}
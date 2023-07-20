import { VaultAssociate } from './VaultAssociate';


export class AssociateVaultPolicyRequest {
    private 'vault_id'?: string;
    public body?: VaultAssociate;
    public constructor(vaultId?: string) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): AssociateVaultPolicyRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withBody(body: VaultAssociate): AssociateVaultPolicyRequest {
        this['body'] = body;
        return this;
    }
}
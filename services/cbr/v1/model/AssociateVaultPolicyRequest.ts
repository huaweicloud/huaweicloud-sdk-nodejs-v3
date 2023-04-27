import { VaultAssociate } from './VaultAssociate';


export class AssociateVaultPolicyRequest {
    private 'vault_id': string | undefined;
    public body?: VaultAssociate;
    public constructor(vaultId?: any) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): AssociateVaultPolicyRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withBody(body: VaultAssociate): AssociateVaultPolicyRequest {
        this['body'] = body;
        return this;
    }
}
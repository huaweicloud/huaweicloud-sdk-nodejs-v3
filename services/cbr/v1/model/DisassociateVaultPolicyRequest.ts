import { VaultDissociate } from './VaultDissociate';


export class DisassociateVaultPolicyRequest {
    private 'vault_id': string | undefined;
    public body?: VaultDissociate;
    public constructor(vaultId?: any) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): DisassociateVaultPolicyRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withBody(body: VaultDissociate): DisassociateVaultPolicyRequest {
        this['body'] = body;
        return this;
    }
}
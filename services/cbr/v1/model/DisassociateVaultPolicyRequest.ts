import { VaultDissociate } from './VaultDissociate';


export class DisassociateVaultPolicyRequest {
    private 'vault_id'?: string;
    public body?: VaultDissociate;
    public constructor(vaultId?: string) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): DisassociateVaultPolicyRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withBody(body: VaultDissociate): DisassociateVaultPolicyRequest {
        this['body'] = body;
        return this;
    }
}
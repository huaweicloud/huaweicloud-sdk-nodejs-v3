import { VaultUpdateReq } from './VaultUpdateReq';


export class UpdateVaultRequest {
    private 'vault_id'?: string;
    public body?: VaultUpdateReq;
    public constructor(vaultId?: string) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): UpdateVaultRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withBody(body: VaultUpdateReq): UpdateVaultRequest {
        this['body'] = body;
        return this;
    }
}
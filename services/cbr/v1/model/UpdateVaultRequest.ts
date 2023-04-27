import { VaultUpdateReq } from './VaultUpdateReq';


export class UpdateVaultRequest {
    private 'vault_id': string | undefined;
    public body?: VaultUpdateReq;
    public constructor(vaultId?: any) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): UpdateVaultRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withBody(body: VaultUpdateReq): UpdateVaultRequest {
        this['body'] = body;
        return this;
    }
}
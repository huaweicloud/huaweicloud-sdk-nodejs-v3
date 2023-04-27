import { VaultMigrateResourceReq } from './VaultMigrateResourceReq';


export class MigrateVaultResourceRequest {
    private 'vault_id': string | undefined;
    public body?: VaultMigrateResourceReq;
    public constructor(vaultId?: any) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): MigrateVaultResourceRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withBody(body: VaultMigrateResourceReq): MigrateVaultResourceRequest {
        this['body'] = body;
        return this;
    }
}
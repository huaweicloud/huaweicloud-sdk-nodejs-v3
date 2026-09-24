import { UpdateExpirationTimeReq } from './UpdateExpirationTimeReq';


export class UpdateExpirationTimeRequest {
    private 'vault_id'?: string;
    public body?: UpdateExpirationTimeReq;
    public constructor(vaultId?: string) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): UpdateExpirationTimeRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withBody(body: UpdateExpirationTimeReq): UpdateExpirationTimeRequest {
        this['body'] = body;
        return this;
    }
}


export class GetTokenVaultRequest {
    private 'token_vault_id'?: string;
    public constructor(tokenVaultId?: string) { 
        this['token_vault_id'] = tokenVaultId;
    }
    public withTokenVaultId(tokenVaultId: string): GetTokenVaultRequest {
        this['token_vault_id'] = tokenVaultId;
        return this;
    }
    public set tokenVaultId(tokenVaultId: string  | undefined) {
        this['token_vault_id'] = tokenVaultId;
    }
    public get tokenVaultId(): string | undefined {
        return this['token_vault_id'];
    }
}
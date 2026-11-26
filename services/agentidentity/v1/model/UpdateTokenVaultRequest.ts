import { UpdateTokenVaultReqBody } from './UpdateTokenVaultReqBody';


export class UpdateTokenVaultRequest {
    private 'token_vault_id'?: string;
    public body?: UpdateTokenVaultReqBody;
    public constructor(tokenVaultId?: string) { 
        this['token_vault_id'] = tokenVaultId;
    }
    public withTokenVaultId(tokenVaultId: string): UpdateTokenVaultRequest {
        this['token_vault_id'] = tokenVaultId;
        return this;
    }
    public set tokenVaultId(tokenVaultId: string  | undefined) {
        this['token_vault_id'] = tokenVaultId;
    }
    public get tokenVaultId(): string | undefined {
        return this['token_vault_id'];
    }
    public withBody(body: UpdateTokenVaultReqBody): UpdateTokenVaultRequest {
        this['body'] = body;
        return this;
    }
}
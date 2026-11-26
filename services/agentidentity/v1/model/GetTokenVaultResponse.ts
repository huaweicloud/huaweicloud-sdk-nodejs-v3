import { TokenVault } from './TokenVault';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetTokenVaultResponse extends SdkResponse {
    private 'token_vault'?: TokenVault;
    public constructor() { 
        super();
    }
    public withTokenVault(tokenVault: TokenVault): GetTokenVaultResponse {
        this['token_vault'] = tokenVault;
        return this;
    }
    public set tokenVault(tokenVault: TokenVault  | undefined) {
        this['token_vault'] = tokenVault;
    }
    public get tokenVault(): TokenVault | undefined {
        return this['token_vault'];
    }
}
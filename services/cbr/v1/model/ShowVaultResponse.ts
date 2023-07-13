import { Vault } from './Vault';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVaultResponse extends SdkResponse {
    public vault?: Vault;
    public constructor() { 
        super();
    }
    public withVault(vault: Vault): ShowVaultResponse {
        this['vault'] = vault;
        return this;
    }
}
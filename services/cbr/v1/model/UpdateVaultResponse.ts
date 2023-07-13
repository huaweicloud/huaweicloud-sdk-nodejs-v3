import { Vault } from './Vault';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVaultResponse extends SdkResponse {
    public vault?: Vault;
    public constructor() { 
        super();
    }
    public withVault(vault: Vault): UpdateVaultResponse {
        this['vault'] = vault;
        return this;
    }
}
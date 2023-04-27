import { VaultCreateResource } from './VaultCreateResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVaultResponse extends SdkResponse {
    public vault?: VaultCreateResource;
    public constructor() { 
        super();
    }
    public withVault(vault: VaultCreateResource): CreateVaultResponse {
        this['vault'] = vault;
        return this;
    }
}
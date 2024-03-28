import { Vault } from './Vault';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExternalVaultResponse extends SdkResponse {
    public vaults?: Array<Vault>;
    public count?: number;
    public limit?: number;
    public offset?: number;
    public constructor() { 
        super();
    }
    public withVaults(vaults: Array<Vault>): ListExternalVaultResponse {
        this['vaults'] = vaults;
        return this;
    }
    public withCount(count: number): ListExternalVaultResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): ListExternalVaultResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListExternalVaultResponse {
        this['offset'] = offset;
        return this;
    }
}
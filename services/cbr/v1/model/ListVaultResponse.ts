import { Vault } from './Vault';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVaultResponse extends SdkResponse {
    public vaults?: Array<Vault>;
    public count?: number;
    public limit?: number;
    public offset?: number;
    public constructor() { 
        super();
    }
    public withVaults(vaults: Array<Vault>): ListVaultResponse {
        this['vaults'] = vaults;
        return this;
    }
    public withCount(count: number): ListVaultResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): ListVaultResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVaultResponse {
        this['offset'] = offset;
        return this;
    }
}
import { Vault } from './Vault';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVaultResponse extends SdkResponse {
    public vaults?: Array<Vault>;
    public count?: number;
    public limit?: number;
    public offset?: number;
    private 'sys_lock_source_service'?: string;
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
    public withSysLockSourceService(sysLockSourceService: string): ListVaultResponse {
        this['sys_lock_source_service'] = sysLockSourceService;
        return this;
    }
    public set sysLockSourceService(sysLockSourceService: string  | undefined) {
        this['sys_lock_source_service'] = sysLockSourceService;
    }
    public get sysLockSourceService(): string | undefined {
        return this['sys_lock_source_service'];
    }
}
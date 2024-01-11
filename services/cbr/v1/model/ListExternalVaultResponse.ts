import { Vault } from './Vault';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExternalVaultResponse extends SdkResponse {
    public vaults?: Array<Vault>;
    public count?: number;
    public limit?: number;
    public offset?: number;
    private 'sys_lock_source_service'?: string;
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
    public withSysLockSourceService(sysLockSourceService: string): ListExternalVaultResponse {
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
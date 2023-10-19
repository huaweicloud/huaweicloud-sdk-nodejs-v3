import { CentralNetworkQuotaKeyEnum } from './CentralNetworkQuotaKeyEnum';


export class CentralNetworkQuotaKey {
    private 'quota_key'?: CentralNetworkQuotaKeyEnum;
    public constructor(quotaKey?: CentralNetworkQuotaKeyEnum) { 
        this['quota_key'] = quotaKey;
    }
    public withQuotaKey(quotaKey: CentralNetworkQuotaKeyEnum): CentralNetworkQuotaKey {
        this['quota_key'] = quotaKey;
        return this;
    }
    public set quotaKey(quotaKey: CentralNetworkQuotaKeyEnum  | undefined) {
        this['quota_key'] = quotaKey;
    }
    public get quotaKey(): CentralNetworkQuotaKeyEnum | undefined {
        return this['quota_key'];
    }
}
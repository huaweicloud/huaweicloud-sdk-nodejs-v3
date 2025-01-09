import { AccountTypeEnum } from './AccountTypeEnum';
import { PlatformTypeEnum } from './PlatformTypeEnum';


export class AccountInfo {
    public account?: string;
    public domain?: string;
    private 'account_type'?: AccountTypeEnum;
    private 'platform_type'?: PlatformTypeEnum;
    public constructor(account?: string, accountType?: AccountTypeEnum) { 
        this['account'] = account;
        this['account_type'] = accountType;
    }
    public withAccount(account: string): AccountInfo {
        this['account'] = account;
        return this;
    }
    public withDomain(domain: string): AccountInfo {
        this['domain'] = domain;
        return this;
    }
    public withAccountType(accountType: AccountTypeEnum): AccountInfo {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: AccountTypeEnum  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): AccountTypeEnum | undefined {
        return this['account_type'];
    }
    public withPlatformType(platformType: PlatformTypeEnum): AccountInfo {
        this['platform_type'] = platformType;
        return this;
    }
    public set platformType(platformType: PlatformTypeEnum  | undefined) {
        this['platform_type'] = platformType;
    }
    public get platformType(): PlatformTypeEnum | undefined {
        return this['platform_type'];
    }
}
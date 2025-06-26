import { AccountTypeEnum } from './AccountTypeEnum';
import { PlatformTypeEnum } from './PlatformTypeEnum';


export class AccountInfo {
    public id?: string;
    public account?: string;
    private 'account_type'?: AccountTypeEnum;
    public domain?: string;
    public email?: string;
    private 'telephone_number'?: string;
    private 'platform_type'?: PlatformTypeEnum;
    public constructor(account?: string, accountType?: AccountTypeEnum) { 
        this['account'] = account;
        this['account_type'] = accountType;
    }
    public withId(id: string): AccountInfo {
        this['id'] = id;
        return this;
    }
    public withAccount(account: string): AccountInfo {
        this['account'] = account;
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
    public withDomain(domain: string): AccountInfo {
        this['domain'] = domain;
        return this;
    }
    public withEmail(email: string): AccountInfo {
        this['email'] = email;
        return this;
    }
    public withTelephoneNumber(telephoneNumber: string): AccountInfo {
        this['telephone_number'] = telephoneNumber;
        return this;
    }
    public set telephoneNumber(telephoneNumber: string  | undefined) {
        this['telephone_number'] = telephoneNumber;
    }
    public get telephoneNumber(): string | undefined {
        return this['telephone_number'];
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
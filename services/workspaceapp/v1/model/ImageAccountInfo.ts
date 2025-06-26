

export class ImageAccountInfo {
    public account?: string;
    private 'account_type'?: ImageAccountInfoAccountTypeEnum | string;
    public domain?: string;
    public constructor(account?: string, accountType?: string) { 
        this['account'] = account;
        this['account_type'] = accountType;
    }
    public withAccount(account: string): ImageAccountInfo {
        this['account'] = account;
        return this;
    }
    public withAccountType(accountType: ImageAccountInfoAccountTypeEnum | string): ImageAccountInfo {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: ImageAccountInfoAccountTypeEnum | string  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): ImageAccountInfoAccountTypeEnum | string | undefined {
        return this['account_type'];
    }
    public withDomain(domain: string): ImageAccountInfo {
        this['domain'] = domain;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageAccountInfoAccountTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP'
}

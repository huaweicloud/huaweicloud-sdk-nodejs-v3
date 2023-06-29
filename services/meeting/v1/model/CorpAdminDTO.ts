

export class CorpAdminDTO {
    public account: string;
    public constructor(account?: any) { 
        this['account'] = account;
    }
    public withAccount(account: string): CorpAdminDTO {
        this['account'] = account;
        return this;
    }
}
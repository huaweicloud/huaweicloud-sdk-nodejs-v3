

export class CorpAdminDTO {
    public account?: string;
    public constructor(account?: string) { 
        this['account'] = account;
    }
    public withAccount(account: string): CorpAdminDTO {
        this['account'] = account;
        return this;
    }
}
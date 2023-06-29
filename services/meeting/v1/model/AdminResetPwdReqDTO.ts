

export class AdminResetPwdReqDTO {
    public account: string;
    public constructor(account?: any) { 
        this['account'] = account;
    }
    public withAccount(account: string): AdminResetPwdReqDTO {
        this['account'] = account;
        return this;
    }
}
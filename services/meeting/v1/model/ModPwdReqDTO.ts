

export class ModPwdReqDTO {
    public account: string;
    public oldPwd: string;
    public newPwd: string;
    public constructor(account?: any, oldPwd?: any, newPwd?: any) { 
        this['account'] = account;
        this['oldPwd'] = oldPwd;
        this['newPwd'] = newPwd;
    }
    public withAccount(account: string): ModPwdReqDTO {
        this['account'] = account;
        return this;
    }
    public withOldPwd(oldPwd: string): ModPwdReqDTO {
        this['oldPwd'] = oldPwd;
        return this;
    }
    public withNewPwd(newPwd: string): ModPwdReqDTO {
        this['newPwd'] = newPwd;
        return this;
    }
}
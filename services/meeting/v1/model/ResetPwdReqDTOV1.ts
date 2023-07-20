

export class ResetPwdReqDTOV1 {
    public user?: string;
    public newPwd?: string;
    public passWordType?: number;
    public constructor(user?: string, newPwd?: string) { 
        this['user'] = user;
        this['newPwd'] = newPwd;
    }
    public withUser(user: string): ResetPwdReqDTOV1 {
        this['user'] = user;
        return this;
    }
    public withNewPwd(newPwd: string): ResetPwdReqDTOV1 {
        this['newPwd'] = newPwd;
        return this;
    }
    public withPassWordType(passWordType: number): ResetPwdReqDTOV1 {
        this['passWordType'] = passWordType;
        return this;
    }
}
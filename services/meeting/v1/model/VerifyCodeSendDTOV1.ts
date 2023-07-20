

export class VerifyCodeSendDTOV1 {
    public user?: string;
    public sendMethod?: string;
    public token?: string;
    public constructor(user?: string) { 
        this['user'] = user;
    }
    public withUser(user: string): VerifyCodeSendDTOV1 {
        this['user'] = user;
        return this;
    }
    public withSendMethod(sendMethod: string): VerifyCodeSendDTOV1 {
        this['sendMethod'] = sendMethod;
        return this;
    }
    public withToken(token: string): VerifyCodeSendDTOV1 {
        this['token'] = token;
        return this;
    }
}
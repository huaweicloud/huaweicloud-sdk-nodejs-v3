

export class ValidateTokenReqDTO {
    public token: string;
    public needGenNewToken: boolean;
    public needAccountInfo?: boolean;
    public constructor(token?: any, needGenNewToken?: any) { 
        this['token'] = token;
        this['needGenNewToken'] = needGenNewToken;
    }
    public withToken(token: string): ValidateTokenReqDTO {
        this['token'] = token;
        return this;
    }
    public withNeedGenNewToken(needGenNewToken: boolean): ValidateTokenReqDTO {
        this['needGenNewToken'] = needGenNewToken;
        return this;
    }
    public withNeedAccountInfo(needAccountInfo: boolean): ValidateTokenReqDTO {
        this['needAccountInfo'] = needAccountInfo;
        return this;
    }
}
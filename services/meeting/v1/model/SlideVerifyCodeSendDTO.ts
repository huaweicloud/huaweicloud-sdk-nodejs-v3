

export class SlideVerifyCodeSendDTO {
    public user: string;
    public clientType: number;
    public checkType?: number;
    public constructor(user?: any, clientType?: any) { 
        this['user'] = user;
        this['clientType'] = clientType;
    }
    public withUser(user: string): SlideVerifyCodeSendDTO {
        this['user'] = user;
        return this;
    }
    public withClientType(clientType: number): SlideVerifyCodeSendDTO {
        this['clientType'] = clientType;
        return this;
    }
    public withCheckType(checkType: number): SlideVerifyCodeSendDTO {
        this['checkType'] = checkType;
        return this;
    }
}
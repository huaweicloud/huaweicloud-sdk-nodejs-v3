

export class SlideVerifyCodeCheckDTO {
    public user?: string;
    public clientType?: number;
    public checkType?: number;
    public token?: string;
    public pointX?: number;
    public slideTime?: number;
    public constructor(user?: string, clientType?: number, token?: string, pointX?: number, slideTime?: number) { 
        this['user'] = user;
        this['clientType'] = clientType;
        this['token'] = token;
        this['pointX'] = pointX;
        this['slideTime'] = slideTime;
    }
    public withUser(user: string): SlideVerifyCodeCheckDTO {
        this['user'] = user;
        return this;
    }
    public withClientType(clientType: number): SlideVerifyCodeCheckDTO {
        this['clientType'] = clientType;
        return this;
    }
    public withCheckType(checkType: number): SlideVerifyCodeCheckDTO {
        this['checkType'] = checkType;
        return this;
    }
    public withToken(token: string): SlideVerifyCodeCheckDTO {
        this['token'] = token;
        return this;
    }
    public withPointX(pointX: number): SlideVerifyCodeCheckDTO {
        this['pointX'] = pointX;
        return this;
    }
    public withSlideTime(slideTime: number): SlideVerifyCodeCheckDTO {
        this['slideTime'] = slideTime;
        return this;
    }
}
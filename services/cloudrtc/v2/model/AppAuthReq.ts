

export class AppAuthReq {
    public enable: boolean;
    public expire?: number;
    public constructor(enable?: any) { 
        this['enable'] = enable;
    }
    public withEnable(enable: boolean): AppAuthReq {
        this['enable'] = enable;
        return this;
    }
    public withExpire(expire: number): AppAuthReq {
        this['expire'] = expire;
        return this;
    }
}
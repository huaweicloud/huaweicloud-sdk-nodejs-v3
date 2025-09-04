

export class TopUrlinReq {
    public enable?: boolean;
    public constructor() { 
    }
    public withEnable(enable: boolean): TopUrlinReq {
        this['enable'] = enable;
        return this;
    }
}
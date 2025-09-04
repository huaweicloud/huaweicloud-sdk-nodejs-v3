

export class TopUa {
    public enable?: boolean;
    public constructor() { 
    }
    public withEnable(enable: boolean): TopUa {
        this['enable'] = enable;
        return this;
    }
}
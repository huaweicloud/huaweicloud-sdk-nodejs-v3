

export class IpVirtual {
    public enable?: boolean;
    public constructor(enable?: boolean) { 
        this['enable'] = enable;
    }
    public withEnable(enable: boolean): IpVirtual {
        this['enable'] = enable;
        return this;
    }
}
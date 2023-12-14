

export class EnableLogicalClusterRequestBody {
    public enable?: boolean;
    public constructor(enable?: boolean) { 
        this['enable'] = enable;
    }
    public withEnable(enable: boolean): EnableLogicalClusterRequestBody {
        this['enable'] = enable;
        return this;
    }
}
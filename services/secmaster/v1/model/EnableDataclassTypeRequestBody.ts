

export class EnableDataclassTypeRequestBody {
    public enable?: boolean;
    public ids?: Array<string>;
    public constructor(enable?: boolean, ids?: Array<string>) { 
        this['enable'] = enable;
        this['ids'] = ids;
    }
    public withEnable(enable: boolean): EnableDataclassTypeRequestBody {
        this['enable'] = enable;
        return this;
    }
    public withIds(ids: Array<string>): EnableDataclassTypeRequestBody {
        this['ids'] = ids;
        return this;
    }
}
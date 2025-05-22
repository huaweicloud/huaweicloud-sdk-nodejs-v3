

export class RecycleBinRequestBody {
    public enable?: boolean;
    public constructor() { 
    }
    public withEnable(enable: boolean): RecycleBinRequestBody {
        this['enable'] = enable;
        return this;
    }
}
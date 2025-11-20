

export class RestoreMetaData2ExistReq {
    public source?: object;
    public target?: object;
    public constructor() { 
    }
    public withSource(source: object): RestoreMetaData2ExistReq {
        this['source'] = source;
        return this;
    }
    public withTarget(target: object): RestoreMetaData2ExistReq {
        this['target'] = target;
        return this;
    }
}


export class DubboMethodParam {
    public paramKey?: string;
    public paramSource?: string;
    public paramType?: string;
    public constructor() { 
    }
    public withParamKey(paramKey: string): DubboMethodParam {
        this['paramKey'] = paramKey;
        return this;
    }
    public withParamSource(paramSource: string): DubboMethodParam {
        this['paramSource'] = paramSource;
        return this;
    }
    public withParamType(paramType: string): DubboMethodParam {
        this['paramType'] = paramType;
        return this;
    }
}
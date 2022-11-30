

export class GlanceUpdateImageRequestBody {
    public op: GlanceUpdateImageRequestBodyOpEnum;
    public path: string;
    public value?: string;
    public constructor(op?: any, path?: any) { 
        this['op'] = op;
        this['path'] = path;
    }
    public withOp(op: GlanceUpdateImageRequestBodyOpEnum): GlanceUpdateImageRequestBody {
        this['op'] = op;
        return this;
    }
    public withPath(path: string): GlanceUpdateImageRequestBody {
        this['path'] = path;
        return this;
    }
    public withValue(value: string): GlanceUpdateImageRequestBody {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageRequestBodyOpEnum {
    REPLACE = 'replace',
    ADD = 'add',
    REMOVE = 'remove'
}

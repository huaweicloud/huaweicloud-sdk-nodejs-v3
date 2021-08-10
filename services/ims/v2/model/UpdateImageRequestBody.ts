

export class UpdateImageRequestBody {
    public op: UpdateImageRequestBodyOpEnum;
    public path: string;
    public value: string;
    public constructor(op?: any, path?: any, value?: any) { 
        this['op'] = op;
        this['path'] = path;
        this['value'] = value;
    }
    public withOp(op: UpdateImageRequestBodyOpEnum): UpdateImageRequestBody {
        this['op'] = op;
        return this;
    }
    public withPath(path: string): UpdateImageRequestBody {
        this['path'] = path;
        return this;
    }
    public withValue(value: string): UpdateImageRequestBody {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateImageRequestBodyOpEnum {
    ADD = 'add',
    REPLACE = 'replace',
    REMOVE = 'remove'
}

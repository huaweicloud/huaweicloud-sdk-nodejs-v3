

export class UpdateImageRequestBody {
    public op?: UpdateImageRequestBodyOpEnum | string;
    public path?: string;
    public value?: string;
    public constructor(op?: string, path?: string, value?: string) { 
        this['op'] = op;
        this['path'] = path;
        this['value'] = value;
    }
    public withOp(op: UpdateImageRequestBodyOpEnum | string): UpdateImageRequestBody {
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

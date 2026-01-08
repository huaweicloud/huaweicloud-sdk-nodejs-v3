

export class BatchDeleteInstanceTagRequestBody {
    public keys?: Array<string>;
    public constructor(keys?: Array<string>) { 
        this['keys'] = keys;
    }
    public withKeys(keys: Array<string>): BatchDeleteInstanceTagRequestBody {
        this['keys'] = keys;
        return this;
    }
}
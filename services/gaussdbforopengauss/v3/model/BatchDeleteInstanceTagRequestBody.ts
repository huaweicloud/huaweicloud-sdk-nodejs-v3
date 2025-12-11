

export class BatchDeleteInstanceTagRequestBody {
    public keys?: Array<string>;
    public constructor() { 
    }
    public withKeys(keys: Array<string>): BatchDeleteInstanceTagRequestBody {
        this['keys'] = keys;
        return this;
    }
}
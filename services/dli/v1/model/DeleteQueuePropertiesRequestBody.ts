

export class DeleteQueuePropertiesRequestBody {
    public keys?: Array<string>;
    public constructor(keys?: Array<string>) { 
        this['keys'] = keys;
    }
    public withKeys(keys: Array<string>): DeleteQueuePropertiesRequestBody {
        this['keys'] = keys;
        return this;
    }
}
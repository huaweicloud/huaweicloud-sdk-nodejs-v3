

export class DeleteQueuePropertyRequestBody {
    public keys?: Array<string>;
    public constructor(keys?: Array<string>) { 
        this['keys'] = keys;
    }
    public withKeys(keys: Array<string>): DeleteQueuePropertyRequestBody {
        this['keys'] = keys;
        return this;
    }
}
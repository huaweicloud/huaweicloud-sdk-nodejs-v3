

export class BucketAuthorizedReq {
    public bucket?: string;
    public operation?: BucketAuthorizedReqOperationEnum | string;
    public constructor(bucket?: string, operation?: string) { 
        this['bucket'] = bucket;
        this['operation'] = operation;
    }
    public withBucket(bucket: string): BucketAuthorizedReq {
        this['bucket'] = bucket;
        return this;
    }
    public withOperation(operation: BucketAuthorizedReqOperationEnum | string): BucketAuthorizedReq {
        this['operation'] = operation;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BucketAuthorizedReqOperationEnum {
    E_0 = '0',
    E_1 = '1'
}

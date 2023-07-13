

export class UpdateBucketAuthorizedReq {
    public bucket: string;
    public operation: string;
    public constructor(bucket?: any, operation?: any) { 
        this['bucket'] = bucket;
        this['operation'] = operation;
    }
    public withBucket(bucket: string): UpdateBucketAuthorizedReq {
        this['bucket'] = bucket;
        return this;
    }
    public withOperation(operation: string): UpdateBucketAuthorizedReq {
        this['operation'] = operation;
        return this;
    }
}
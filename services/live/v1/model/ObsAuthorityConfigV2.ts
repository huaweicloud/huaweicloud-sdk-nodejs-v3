

export class ObsAuthorityConfigV2 {
    public bucket: string;
    public operation: number;
    public constructor(bucket?: any, operation?: any) { 
        this['bucket'] = bucket;
        this['operation'] = operation;
    }
    public withBucket(bucket: string): ObsAuthorityConfigV2 {
        this['bucket'] = bucket;
        return this;
    }
    public withOperation(operation: number): ObsAuthorityConfigV2 {
        this['operation'] = operation;
        return this;
    }
}
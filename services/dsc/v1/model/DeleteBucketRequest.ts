

export class DeleteBucketRequest {
    private 'bucket_id'?: string;
    public constructor(bucketId?: string) { 
        this['bucket_id'] = bucketId;
    }
    public withBucketId(bucketId: string): DeleteBucketRequest {
        this['bucket_id'] = bucketId;
        return this;
    }
    public set bucketId(bucketId: string  | undefined) {
        this['bucket_id'] = bucketId;
    }
    public get bucketId(): string | undefined {
        return this['bucket_id'];
    }
}
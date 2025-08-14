

export class BucketNameReq {
    private 'bucket_name'?: string;
    public constructor() { 
    }
    public withBucketName(bucketName: string): BucketNameReq {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
}
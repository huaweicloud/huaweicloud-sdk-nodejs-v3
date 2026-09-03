

export class CreateFullSqlBucketRequestBody {
    private 'bucket_name'?: string;
    public constructor(bucketName?: string) { 
        this['bucket_name'] = bucketName;
    }
    public withBucketName(bucketName: string): CreateFullSqlBucketRequestBody {
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
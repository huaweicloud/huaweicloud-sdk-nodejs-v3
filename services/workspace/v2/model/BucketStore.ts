

export class BucketStore {
    private 'bucket_name'?: string;
    private 'bucket_file_path'?: string;
    public constructor() { 
    }
    public withBucketName(bucketName: string): BucketStore {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withBucketFilePath(bucketFilePath: string): BucketStore {
        this['bucket_file_path'] = bucketFilePath;
        return this;
    }
    public set bucketFilePath(bucketFilePath: string  | undefined) {
        this['bucket_file_path'] = bucketFilePath;
    }
    public get bucketFilePath(): string | undefined {
        return this['bucket_file_path'];
    }
}


export class RecoveryInfo {
    private 'bucket_name'?: string;
    public files?: Array<string>;
    public constructor(bucketName?: string, files?: Array<string>) { 
        this['bucket_name'] = bucketName;
        this['files'] = files;
    }
    public withBucketName(bucketName: string): RecoveryInfo {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withFiles(files: Array<string>): RecoveryInfo {
        this['files'] = files;
        return this;
    }
}


export class RestoreInfo {
    private 'phone_id'?: string;
    private 'bucket_name'?: string;
    private 'object_path'?: string;
    public constructor(phoneId?: string, bucketName?: string, objectPath?: string) { 
        this['phone_id'] = phoneId;
        this['bucket_name'] = bucketName;
        this['object_path'] = objectPath;
    }
    public withPhoneId(phoneId: string): RestoreInfo {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withBucketName(bucketName: string): RestoreInfo {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withObjectPath(objectPath: string): RestoreInfo {
        this['object_path'] = objectPath;
        return this;
    }
    public set objectPath(objectPath: string  | undefined) {
        this['object_path'] = objectPath;
    }
    public get objectPath(): string | undefined {
        return this['object_path'];
    }
}
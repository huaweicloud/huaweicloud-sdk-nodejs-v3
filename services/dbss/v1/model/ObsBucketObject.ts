

export class ObsBucketObject {
    private 'bucket_name'?: string;
    public location?: string;
    public constructor() { 
    }
    public withBucketName(bucketName: string): ObsBucketObject {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withLocation(location: string): ObsBucketObject {
        this['location'] = location;
        return this;
    }
}
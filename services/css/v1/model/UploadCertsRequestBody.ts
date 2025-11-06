

export class UploadCertsRequestBody {
    private 'bucket_name'?: string;
    private 'certs_object'?: string;
    public constructor(bucketName?: string, certsObject?: string) { 
        this['bucket_name'] = bucketName;
        this['certs_object'] = certsObject;
    }
    public withBucketName(bucketName: string): UploadCertsRequestBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withCertsObject(certsObject: string): UploadCertsRequestBody {
        this['certs_object'] = certsObject;
        return this;
    }
    public set certsObject(certsObject: string  | undefined) {
        this['certs_object'] = certsObject;
    }
    public get certsObject(): string | undefined {
        return this['certs_object'];
    }
}
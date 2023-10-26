

export class BucketBean {
    private 'asset_name'?: string;
    public location?: string;
    private 'bucket_name'?: string;
    private 'bucket_policy'?: string;
    public constructor() { 
    }
    public withAssetName(assetName: string): BucketBean {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withLocation(location: string): BucketBean {
        this['location'] = location;
        return this;
    }
    public withBucketName(bucketName: string): BucketBean {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withBucketPolicy(bucketPolicy: string): BucketBean {
        this['bucket_policy'] = bucketPolicy;
        return this;
    }
    public set bucketPolicy(bucketPolicy: string  | undefined) {
        this['bucket_policy'] = bucketPolicy;
    }
    public get bucketPolicy(): string | undefined {
        return this['bucket_policy'];
    }
}
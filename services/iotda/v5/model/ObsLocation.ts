

export class ObsLocation {
    private 'region_name'?: string;
    private 'bucket_name'?: string;
    private 'object_key'?: string;
    private 'sign_method'?: string;
    public sign?: string;
    public constructor(regionName?: string, bucketName?: string, objectKey?: string) { 
        this['region_name'] = regionName;
        this['bucket_name'] = bucketName;
        this['object_key'] = objectKey;
    }
    public withRegionName(regionName: string): ObsLocation {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withBucketName(bucketName: string): ObsLocation {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withObjectKey(objectKey: string): ObsLocation {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: string  | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey(): string | undefined {
        return this['object_key'];
    }
    public withSignMethod(signMethod: string): ObsLocation {
        this['sign_method'] = signMethod;
        return this;
    }
    public set signMethod(signMethod: string  | undefined) {
        this['sign_method'] = signMethod;
    }
    public get signMethod(): string | undefined {
        return this['sign_method'];
    }
    public withSign(sign: string): ObsLocation {
        this['sign'] = sign;
        return this;
    }
}
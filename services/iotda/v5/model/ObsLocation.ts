

export class ObsLocation {
    private 'region_name': string | undefined;
    private 'bucket_name': string | undefined;
    private 'object_key': string | undefined;
    public constructor(regionName?: any, bucketName?: any, objectKey?: any) { 
        this['region_name'] = regionName;
        this['bucket_name'] = bucketName;
        this['object_key'] = objectKey;
    }
    public withRegionName(regionName: string): ObsLocation {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withBucketName(bucketName: string): ObsLocation {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName() {
        return this['bucket_name'];
    }
    public withObjectKey(objectKey: string): ObsLocation {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: string | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey() {
        return this['object_key'];
    }
}
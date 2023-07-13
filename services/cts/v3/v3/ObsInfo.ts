

export class ObsInfo {
    private 'bucket_name'?: string | undefined;
    private 'file_prefix_name'?: string | undefined;
    private 'is_obs_created'?: boolean | undefined;
    private 'is_authorized_bucket'?: boolean | undefined;
    private 'bucket_lifecycle'?: number | undefined;
    private 'compress_type'?: ObsInfoCompressTypeEnum | undefined;
    private 'is_sort_by_service'?: boolean | undefined;
    public constructor() { 
    }
    public withBucketName(bucketName: string): ObsInfo {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName() {
        return this['bucket_name'];
    }
    public withFilePrefixName(filePrefixName: string): ObsInfo {
        this['file_prefix_name'] = filePrefixName;
        return this;
    }
    public set filePrefixName(filePrefixName: string | undefined) {
        this['file_prefix_name'] = filePrefixName;
    }
    public get filePrefixName() {
        return this['file_prefix_name'];
    }
    public withIsObsCreated(isObsCreated: boolean): ObsInfo {
        this['is_obs_created'] = isObsCreated;
        return this;
    }
    public set isObsCreated(isObsCreated: boolean | undefined) {
        this['is_obs_created'] = isObsCreated;
    }
    public get isObsCreated() {
        return this['is_obs_created'];
    }
    public withIsAuthorizedBucket(isAuthorizedBucket: boolean): ObsInfo {
        this['is_authorized_bucket'] = isAuthorizedBucket;
        return this;
    }
    public set isAuthorizedBucket(isAuthorizedBucket: boolean | undefined) {
        this['is_authorized_bucket'] = isAuthorizedBucket;
    }
    public get isAuthorizedBucket() {
        return this['is_authorized_bucket'];
    }
    public withBucketLifecycle(bucketLifecycle: number): ObsInfo {
        this['bucket_lifecycle'] = bucketLifecycle;
        return this;
    }
    public set bucketLifecycle(bucketLifecycle: number | undefined) {
        this['bucket_lifecycle'] = bucketLifecycle;
    }
    public get bucketLifecycle() {
        return this['bucket_lifecycle'];
    }
    public withCompressType(compressType: ObsInfoCompressTypeEnum): ObsInfo {
        this['compress_type'] = compressType;
        return this;
    }
    public set compressType(compressType: ObsInfoCompressTypeEnum | undefined) {
        this['compress_type'] = compressType;
    }
    public get compressType() {
        return this['compress_type'];
    }
    public withIsSortByService(isSortByService: boolean): ObsInfo {
        this['is_sort_by_service'] = isSortByService;
        return this;
    }
    public set isSortByService(isSortByService: boolean | undefined) {
        this['is_sort_by_service'] = isSortByService;
    }
    public get isSortByService() {
        return this['is_sort_by_service'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ObsInfoCompressTypeEnum {
    GZIP = 'gzip',
    JSON = 'json'
}

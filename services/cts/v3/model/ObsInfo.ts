

export class ObsInfo {
    private 'bucket_name'?: string;
    private 'file_prefix_name'?: string;
    private 'is_obs_created'?: boolean;
    private 'is_authorized_bucket'?: boolean;
    private 'bucket_lifecycle'?: number;
    private 'compress_type'?: ObsInfoCompressTypeEnum | string;
    private 'is_sort_by_service'?: boolean;
    public constructor() { 
    }
    public withBucketName(bucketName: string): ObsInfo {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withFilePrefixName(filePrefixName: string): ObsInfo {
        this['file_prefix_name'] = filePrefixName;
        return this;
    }
    public set filePrefixName(filePrefixName: string  | undefined) {
        this['file_prefix_name'] = filePrefixName;
    }
    public get filePrefixName(): string | undefined {
        return this['file_prefix_name'];
    }
    public withIsObsCreated(isObsCreated: boolean): ObsInfo {
        this['is_obs_created'] = isObsCreated;
        return this;
    }
    public set isObsCreated(isObsCreated: boolean  | undefined) {
        this['is_obs_created'] = isObsCreated;
    }
    public get isObsCreated(): boolean | undefined {
        return this['is_obs_created'];
    }
    public withIsAuthorizedBucket(isAuthorizedBucket: boolean): ObsInfo {
        this['is_authorized_bucket'] = isAuthorizedBucket;
        return this;
    }
    public set isAuthorizedBucket(isAuthorizedBucket: boolean  | undefined) {
        this['is_authorized_bucket'] = isAuthorizedBucket;
    }
    public get isAuthorizedBucket(): boolean | undefined {
        return this['is_authorized_bucket'];
    }
    public withBucketLifecycle(bucketLifecycle: number): ObsInfo {
        this['bucket_lifecycle'] = bucketLifecycle;
        return this;
    }
    public set bucketLifecycle(bucketLifecycle: number  | undefined) {
        this['bucket_lifecycle'] = bucketLifecycle;
    }
    public get bucketLifecycle(): number | undefined {
        return this['bucket_lifecycle'];
    }
    public withCompressType(compressType: ObsInfoCompressTypeEnum | string): ObsInfo {
        this['compress_type'] = compressType;
        return this;
    }
    public set compressType(compressType: ObsInfoCompressTypeEnum | string  | undefined) {
        this['compress_type'] = compressType;
    }
    public get compressType(): ObsInfoCompressTypeEnum | string | undefined {
        return this['compress_type'];
    }
    public withIsSortByService(isSortByService: boolean): ObsInfo {
        this['is_sort_by_service'] = isSortByService;
        return this;
    }
    public set isSortByService(isSortByService: boolean  | undefined) {
        this['is_sort_by_service'] = isSortByService;
    }
    public get isSortByService(): boolean | undefined {
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

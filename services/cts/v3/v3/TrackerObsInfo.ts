

export class TrackerObsInfo {
    private 'bucket_name'?: string | undefined;
    private 'file_prefix_name'?: string | undefined;
    private 'is_obs_created'?: boolean | undefined;
    private 'bucket_lifecycle'?: number | undefined;
    private 'compress_type'?: TrackerObsInfoCompressTypeEnum | undefined;
    private 'is_sort_by_service'?: boolean | undefined;
    public constructor() { 
    }
    public withBucketName(bucketName: string): TrackerObsInfo {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName() {
        return this['bucket_name'];
    }
    public withFilePrefixName(filePrefixName: string): TrackerObsInfo {
        this['file_prefix_name'] = filePrefixName;
        return this;
    }
    public set filePrefixName(filePrefixName: string | undefined) {
        this['file_prefix_name'] = filePrefixName;
    }
    public get filePrefixName() {
        return this['file_prefix_name'];
    }
    public withIsObsCreated(isObsCreated: boolean): TrackerObsInfo {
        this['is_obs_created'] = isObsCreated;
        return this;
    }
    public set isObsCreated(isObsCreated: boolean | undefined) {
        this['is_obs_created'] = isObsCreated;
    }
    public get isObsCreated() {
        return this['is_obs_created'];
    }
    public withBucketLifecycle(bucketLifecycle: number): TrackerObsInfo {
        this['bucket_lifecycle'] = bucketLifecycle;
        return this;
    }
    public set bucketLifecycle(bucketLifecycle: number | undefined) {
        this['bucket_lifecycle'] = bucketLifecycle;
    }
    public get bucketLifecycle() {
        return this['bucket_lifecycle'];
    }
    public withCompressType(compressType: TrackerObsInfoCompressTypeEnum): TrackerObsInfo {
        this['compress_type'] = compressType;
        return this;
    }
    public set compressType(compressType: TrackerObsInfoCompressTypeEnum | undefined) {
        this['compress_type'] = compressType;
    }
    public get compressType() {
        return this['compress_type'];
    }
    public withIsSortByService(isSortByService: boolean): TrackerObsInfo {
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
export enum TrackerObsInfoCompressTypeEnum {
    GZIP = 'gzip',
    JSON = 'json'
}

import { SourceCdnResp } from './SourceCdnResp';


export class SyncTaskInfo {
    private 'sync_task_id'?: string;
    private 'src_cloud_type'?: SyncTaskInfoSrcCloudTypeEnum | string;
    private 'src_region'?: string;
    private 'src_bucket'?: string;
    private 'create_time'?: number;
    private 'last_start_time'?: number;
    private 'dst_bucket'?: string;
    private 'dst_region'?: string;
    public description?: string;
    public status?: SyncTaskInfoStatusEnum | string;
    private 'enable_kms'?: boolean;
    private 'enable_metadata_migration'?: boolean;
    private 'enable_restore'?: boolean;
    private 'object_overwrite_mode'?: SyncTaskInfoObjectOverwriteModeEnum | string;
    private 'dst_storage_policy'?: SyncTaskInfoDstStoragePolicyEnum | string;
    private 'app_id'?: string;
    private 'source_cdn'?: SourceCdnResp;
    private 'consistency_check'?: SyncTaskInfoConsistencyCheckEnum | string;
    public constructor() { 
    }
    public withSyncTaskId(syncTaskId: string): SyncTaskInfo {
        this['sync_task_id'] = syncTaskId;
        return this;
    }
    public set syncTaskId(syncTaskId: string  | undefined) {
        this['sync_task_id'] = syncTaskId;
    }
    public get syncTaskId(): string | undefined {
        return this['sync_task_id'];
    }
    public withSrcCloudType(srcCloudType: SyncTaskInfoSrcCloudTypeEnum | string): SyncTaskInfo {
        this['src_cloud_type'] = srcCloudType;
        return this;
    }
    public set srcCloudType(srcCloudType: SyncTaskInfoSrcCloudTypeEnum | string  | undefined) {
        this['src_cloud_type'] = srcCloudType;
    }
    public get srcCloudType(): SyncTaskInfoSrcCloudTypeEnum | string | undefined {
        return this['src_cloud_type'];
    }
    public withSrcRegion(srcRegion: string): SyncTaskInfo {
        this['src_region'] = srcRegion;
        return this;
    }
    public set srcRegion(srcRegion: string  | undefined) {
        this['src_region'] = srcRegion;
    }
    public get srcRegion(): string | undefined {
        return this['src_region'];
    }
    public withSrcBucket(srcBucket: string): SyncTaskInfo {
        this['src_bucket'] = srcBucket;
        return this;
    }
    public set srcBucket(srcBucket: string  | undefined) {
        this['src_bucket'] = srcBucket;
    }
    public get srcBucket(): string | undefined {
        return this['src_bucket'];
    }
    public withCreateTime(createTime: number): SyncTaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastStartTime(lastStartTime: number): SyncTaskInfo {
        this['last_start_time'] = lastStartTime;
        return this;
    }
    public set lastStartTime(lastStartTime: number  | undefined) {
        this['last_start_time'] = lastStartTime;
    }
    public get lastStartTime(): number | undefined {
        return this['last_start_time'];
    }
    public withDstBucket(dstBucket: string): SyncTaskInfo {
        this['dst_bucket'] = dstBucket;
        return this;
    }
    public set dstBucket(dstBucket: string  | undefined) {
        this['dst_bucket'] = dstBucket;
    }
    public get dstBucket(): string | undefined {
        return this['dst_bucket'];
    }
    public withDstRegion(dstRegion: string): SyncTaskInfo {
        this['dst_region'] = dstRegion;
        return this;
    }
    public set dstRegion(dstRegion: string  | undefined) {
        this['dst_region'] = dstRegion;
    }
    public get dstRegion(): string | undefined {
        return this['dst_region'];
    }
    public withDescription(description: string): SyncTaskInfo {
        this['description'] = description;
        return this;
    }
    public withStatus(status: SyncTaskInfoStatusEnum | string): SyncTaskInfo {
        this['status'] = status;
        return this;
    }
    public withEnableKms(enableKms: boolean): SyncTaskInfo {
        this['enable_kms'] = enableKms;
        return this;
    }
    public set enableKms(enableKms: boolean  | undefined) {
        this['enable_kms'] = enableKms;
    }
    public get enableKms(): boolean | undefined {
        return this['enable_kms'];
    }
    public withEnableMetadataMigration(enableMetadataMigration: boolean): SyncTaskInfo {
        this['enable_metadata_migration'] = enableMetadataMigration;
        return this;
    }
    public set enableMetadataMigration(enableMetadataMigration: boolean  | undefined) {
        this['enable_metadata_migration'] = enableMetadataMigration;
    }
    public get enableMetadataMigration(): boolean | undefined {
        return this['enable_metadata_migration'];
    }
    public withEnableRestore(enableRestore: boolean): SyncTaskInfo {
        this['enable_restore'] = enableRestore;
        return this;
    }
    public set enableRestore(enableRestore: boolean  | undefined) {
        this['enable_restore'] = enableRestore;
    }
    public get enableRestore(): boolean | undefined {
        return this['enable_restore'];
    }
    public withObjectOverwriteMode(objectOverwriteMode: SyncTaskInfoObjectOverwriteModeEnum | string): SyncTaskInfo {
        this['object_overwrite_mode'] = objectOverwriteMode;
        return this;
    }
    public set objectOverwriteMode(objectOverwriteMode: SyncTaskInfoObjectOverwriteModeEnum | string  | undefined) {
        this['object_overwrite_mode'] = objectOverwriteMode;
    }
    public get objectOverwriteMode(): SyncTaskInfoObjectOverwriteModeEnum | string | undefined {
        return this['object_overwrite_mode'];
    }
    public withDstStoragePolicy(dstStoragePolicy: SyncTaskInfoDstStoragePolicyEnum | string): SyncTaskInfo {
        this['dst_storage_policy'] = dstStoragePolicy;
        return this;
    }
    public set dstStoragePolicy(dstStoragePolicy: SyncTaskInfoDstStoragePolicyEnum | string  | undefined) {
        this['dst_storage_policy'] = dstStoragePolicy;
    }
    public get dstStoragePolicy(): SyncTaskInfoDstStoragePolicyEnum | string | undefined {
        return this['dst_storage_policy'];
    }
    public withAppId(appId: string): SyncTaskInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withSourceCdn(sourceCdn: SourceCdnResp): SyncTaskInfo {
        this['source_cdn'] = sourceCdn;
        return this;
    }
    public set sourceCdn(sourceCdn: SourceCdnResp  | undefined) {
        this['source_cdn'] = sourceCdn;
    }
    public get sourceCdn(): SourceCdnResp | undefined {
        return this['source_cdn'];
    }
    public withConsistencyCheck(consistencyCheck: SyncTaskInfoConsistencyCheckEnum | string): SyncTaskInfo {
        this['consistency_check'] = consistencyCheck;
        return this;
    }
    public set consistencyCheck(consistencyCheck: SyncTaskInfoConsistencyCheckEnum | string  | undefined) {
        this['consistency_check'] = consistencyCheck;
    }
    public get consistencyCheck(): SyncTaskInfoConsistencyCheckEnum | string | undefined {
        return this['consistency_check'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SyncTaskInfoSrcCloudTypeEnum {
    AWS = 'AWS',
    AZURE = 'Azure',
    ALIYUN = 'Aliyun',
    TENCENT = 'Tencent',
    HUAWEICLOUD = 'HuaweiCloud',
    QINGCLOUD = 'QingCloud',
    KINGSOFTCLOUD = 'KingsoftCloud',
    BAIDU = 'Baidu',
    QINIU = 'Qiniu',
    UCLOUD = 'UCloud',
    GOOGLE = 'Google'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncTaskInfoStatusEnum {
    SYNCHRONIZING = 'SYNCHRONIZING',
    STOPPED = 'STOPPED'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncTaskInfoObjectOverwriteModeEnum {
    NO_OVERWRITE = 'NO_OVERWRITE',
    SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE = 'SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE',
    CRC64_COMPARISON_OVERWRITE = 'CRC64_COMPARISON_OVERWRITE',
    FULL_OVERWRITE = 'FULL_OVERWRITE'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncTaskInfoDstStoragePolicyEnum {
    STANDARD = 'STANDARD',
    IA = 'IA',
    ARCHIVE = 'ARCHIVE',
    DEEP_ARCHIVE = 'DEEP_ARCHIVE',
    SRC_STORAGE_MAPPING = 'SRC_STORAGE_MAPPING'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncTaskInfoConsistencyCheckEnum {
    SIZE_LAST_MODIFIED = 'size_last_modified',
    CRC64 = 'crc64',
    NO_CHECK = 'no_check'
}

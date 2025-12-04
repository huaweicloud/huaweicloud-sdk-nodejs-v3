
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSyncTaskResponse extends SdkResponse {
    private 'sync_task_id'?: string;
    private 'src_cloud_type'?: ShowSyncTaskResponseSrcCloudTypeEnum | string;
    private 'src_region'?: string;
    private 'src_bucket'?: string;
    private 'create_time'?: number;
    private 'last_start_time'?: number;
    private 'dst_bucket'?: string;
    private 'dst_region'?: string;
    public description?: string;
    public status?: ShowSyncTaskResponseStatusEnum | string;
    private 'enable_kms'?: boolean;
    private 'enable_metadata_migration'?: boolean;
    private 'enable_restore'?: boolean;
    private 'app_id'?: string;
    private 'monthly_acceptance_request'?: number;
    private 'monthly_success_object'?: number;
    private 'monthly_failure_object'?: number;
    private 'monthly_skip_object'?: number;
    private 'monthly_size'?: number;
    private 'object_overwrite_mode'?: ShowSyncTaskResponseObjectOverwriteModeEnum | string;
    private 'dst_storage_policy'?: ShowSyncTaskResponseDstStoragePolicyEnum | string;
    private 'consistency_check'?: ShowSyncTaskResponseConsistencyCheckEnum | string;
    public constructor() { 
        super();
    }
    public withSyncTaskId(syncTaskId: string): ShowSyncTaskResponse {
        this['sync_task_id'] = syncTaskId;
        return this;
    }
    public set syncTaskId(syncTaskId: string  | undefined) {
        this['sync_task_id'] = syncTaskId;
    }
    public get syncTaskId(): string | undefined {
        return this['sync_task_id'];
    }
    public withSrcCloudType(srcCloudType: ShowSyncTaskResponseSrcCloudTypeEnum | string): ShowSyncTaskResponse {
        this['src_cloud_type'] = srcCloudType;
        return this;
    }
    public set srcCloudType(srcCloudType: ShowSyncTaskResponseSrcCloudTypeEnum | string  | undefined) {
        this['src_cloud_type'] = srcCloudType;
    }
    public get srcCloudType(): ShowSyncTaskResponseSrcCloudTypeEnum | string | undefined {
        return this['src_cloud_type'];
    }
    public withSrcRegion(srcRegion: string): ShowSyncTaskResponse {
        this['src_region'] = srcRegion;
        return this;
    }
    public set srcRegion(srcRegion: string  | undefined) {
        this['src_region'] = srcRegion;
    }
    public get srcRegion(): string | undefined {
        return this['src_region'];
    }
    public withSrcBucket(srcBucket: string): ShowSyncTaskResponse {
        this['src_bucket'] = srcBucket;
        return this;
    }
    public set srcBucket(srcBucket: string  | undefined) {
        this['src_bucket'] = srcBucket;
    }
    public get srcBucket(): string | undefined {
        return this['src_bucket'];
    }
    public withCreateTime(createTime: number): ShowSyncTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastStartTime(lastStartTime: number): ShowSyncTaskResponse {
        this['last_start_time'] = lastStartTime;
        return this;
    }
    public set lastStartTime(lastStartTime: number  | undefined) {
        this['last_start_time'] = lastStartTime;
    }
    public get lastStartTime(): number | undefined {
        return this['last_start_time'];
    }
    public withDstBucket(dstBucket: string): ShowSyncTaskResponse {
        this['dst_bucket'] = dstBucket;
        return this;
    }
    public set dstBucket(dstBucket: string  | undefined) {
        this['dst_bucket'] = dstBucket;
    }
    public get dstBucket(): string | undefined {
        return this['dst_bucket'];
    }
    public withDstRegion(dstRegion: string): ShowSyncTaskResponse {
        this['dst_region'] = dstRegion;
        return this;
    }
    public set dstRegion(dstRegion: string  | undefined) {
        this['dst_region'] = dstRegion;
    }
    public get dstRegion(): string | undefined {
        return this['dst_region'];
    }
    public withDescription(description: string): ShowSyncTaskResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ShowSyncTaskResponseStatusEnum | string): ShowSyncTaskResponse {
        this['status'] = status;
        return this;
    }
    public withEnableKms(enableKms: boolean): ShowSyncTaskResponse {
        this['enable_kms'] = enableKms;
        return this;
    }
    public set enableKms(enableKms: boolean  | undefined) {
        this['enable_kms'] = enableKms;
    }
    public get enableKms(): boolean | undefined {
        return this['enable_kms'];
    }
    public withEnableMetadataMigration(enableMetadataMigration: boolean): ShowSyncTaskResponse {
        this['enable_metadata_migration'] = enableMetadataMigration;
        return this;
    }
    public set enableMetadataMigration(enableMetadataMigration: boolean  | undefined) {
        this['enable_metadata_migration'] = enableMetadataMigration;
    }
    public get enableMetadataMigration(): boolean | undefined {
        return this['enable_metadata_migration'];
    }
    public withEnableRestore(enableRestore: boolean): ShowSyncTaskResponse {
        this['enable_restore'] = enableRestore;
        return this;
    }
    public set enableRestore(enableRestore: boolean  | undefined) {
        this['enable_restore'] = enableRestore;
    }
    public get enableRestore(): boolean | undefined {
        return this['enable_restore'];
    }
    public withAppId(appId: string): ShowSyncTaskResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withMonthlyAcceptanceRequest(monthlyAcceptanceRequest: number): ShowSyncTaskResponse {
        this['monthly_acceptance_request'] = monthlyAcceptanceRequest;
        return this;
    }
    public set monthlyAcceptanceRequest(monthlyAcceptanceRequest: number  | undefined) {
        this['monthly_acceptance_request'] = monthlyAcceptanceRequest;
    }
    public get monthlyAcceptanceRequest(): number | undefined {
        return this['monthly_acceptance_request'];
    }
    public withMonthlySuccessObject(monthlySuccessObject: number): ShowSyncTaskResponse {
        this['monthly_success_object'] = monthlySuccessObject;
        return this;
    }
    public set monthlySuccessObject(monthlySuccessObject: number  | undefined) {
        this['monthly_success_object'] = monthlySuccessObject;
    }
    public get monthlySuccessObject(): number | undefined {
        return this['monthly_success_object'];
    }
    public withMonthlyFailureObject(monthlyFailureObject: number): ShowSyncTaskResponse {
        this['monthly_failure_object'] = monthlyFailureObject;
        return this;
    }
    public set monthlyFailureObject(monthlyFailureObject: number  | undefined) {
        this['monthly_failure_object'] = monthlyFailureObject;
    }
    public get monthlyFailureObject(): number | undefined {
        return this['monthly_failure_object'];
    }
    public withMonthlySkipObject(monthlySkipObject: number): ShowSyncTaskResponse {
        this['monthly_skip_object'] = monthlySkipObject;
        return this;
    }
    public set monthlySkipObject(monthlySkipObject: number  | undefined) {
        this['monthly_skip_object'] = monthlySkipObject;
    }
    public get monthlySkipObject(): number | undefined {
        return this['monthly_skip_object'];
    }
    public withMonthlySize(monthlySize: number): ShowSyncTaskResponse {
        this['monthly_size'] = monthlySize;
        return this;
    }
    public set monthlySize(monthlySize: number  | undefined) {
        this['monthly_size'] = monthlySize;
    }
    public get monthlySize(): number | undefined {
        return this['monthly_size'];
    }
    public withObjectOverwriteMode(objectOverwriteMode: ShowSyncTaskResponseObjectOverwriteModeEnum | string): ShowSyncTaskResponse {
        this['object_overwrite_mode'] = objectOverwriteMode;
        return this;
    }
    public set objectOverwriteMode(objectOverwriteMode: ShowSyncTaskResponseObjectOverwriteModeEnum | string  | undefined) {
        this['object_overwrite_mode'] = objectOverwriteMode;
    }
    public get objectOverwriteMode(): ShowSyncTaskResponseObjectOverwriteModeEnum | string | undefined {
        return this['object_overwrite_mode'];
    }
    public withDstStoragePolicy(dstStoragePolicy: ShowSyncTaskResponseDstStoragePolicyEnum | string): ShowSyncTaskResponse {
        this['dst_storage_policy'] = dstStoragePolicy;
        return this;
    }
    public set dstStoragePolicy(dstStoragePolicy: ShowSyncTaskResponseDstStoragePolicyEnum | string  | undefined) {
        this['dst_storage_policy'] = dstStoragePolicy;
    }
    public get dstStoragePolicy(): ShowSyncTaskResponseDstStoragePolicyEnum | string | undefined {
        return this['dst_storage_policy'];
    }
    public withConsistencyCheck(consistencyCheck: ShowSyncTaskResponseConsistencyCheckEnum | string): ShowSyncTaskResponse {
        this['consistency_check'] = consistencyCheck;
        return this;
    }
    public set consistencyCheck(consistencyCheck: ShowSyncTaskResponseConsistencyCheckEnum | string  | undefined) {
        this['consistency_check'] = consistencyCheck;
    }
    public get consistencyCheck(): ShowSyncTaskResponseConsistencyCheckEnum | string | undefined {
        return this['consistency_check'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSyncTaskResponseSrcCloudTypeEnum {
    AWS = 'AWS',
    AZURE = 'Azure',
    ALIYUN = 'Aliyun',
    TENCENT = 'Tencent',
    HUAWEICLOUD = 'HuaweiCloud',
    QINGCLOUD = 'QingCloud',
    KINGSOFTCLOUD = 'KingsoftCloud',
    BAIDU = 'Baidu',
    QINIU = 'Qiniu',
    UCLOUD = 'UCloud'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSyncTaskResponseStatusEnum {
    SYNCHRONIZING = 'SYNCHRONIZING',
    STOPPED = 'STOPPED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSyncTaskResponseObjectOverwriteModeEnum {
    NO_OVERWRITE = 'NO_OVERWRITE',
    SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE = 'SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE',
    CRC64_COMPARISON_OVERWRITE = 'CRC64_COMPARISON_OVERWRITE',
    FULL_OVERWRITE = 'FULL_OVERWRITE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSyncTaskResponseDstStoragePolicyEnum {
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
export enum ShowSyncTaskResponseConsistencyCheckEnum {
    SIZE_LAST_MODIFIED = 'size_last_modified',
    CRC64 = 'crc64',
    NO_CHECK = 'no_check'
}

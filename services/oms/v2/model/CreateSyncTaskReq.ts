import { SourceCdnReq } from './SourceCdnReq';


export class CreateSyncTaskReq {
    private 'src_cloud_type'?: string;
    private 'src_region'?: string;
    private 'src_bucket'?: string;
    private 'src_ak'?: string;
    private 'src_sk'?: string;
    private 'src_crypto_type'?: CreateSyncTaskReqSrcCryptoTypeEnum | string;
    private 'src_kms_key_id'?: string;
    private 'dst_ak'?: string;
    private 'dst_sk'?: string;
    private 'dst_crypto_type'?: CreateSyncTaskReqDstCryptoTypeEnum | string;
    private 'dst_kms_key_id'?: string;
    private 'dst_region'?: string;
    private 'dst_bucket'?: string;
    public description?: string;
    private 'enable_metadata_migration'?: boolean;
    private 'enable_restore'?: boolean;
    private 'dst_storage_policy'?: CreateSyncTaskReqDstStoragePolicyEnum | string;
    private 'app_id'?: string;
    private 'source_cdn'?: SourceCdnReq;
    private 'consistency_check'?: CreateSyncTaskReqConsistencyCheckEnum | string;
    public constructor(srcRegion?: string, srcBucket?: string, srcAk?: string, srcSk?: string, dstAk?: string, dstSk?: string, dstRegion?: string, dstBucket?: string) { 
        this['src_region'] = srcRegion;
        this['src_bucket'] = srcBucket;
        this['src_ak'] = srcAk;
        this['src_sk'] = srcSk;
        this['dst_ak'] = dstAk;
        this['dst_sk'] = dstSk;
        this['dst_region'] = dstRegion;
        this['dst_bucket'] = dstBucket;
    }
    public withSrcCloudType(srcCloudType: string): CreateSyncTaskReq {
        this['src_cloud_type'] = srcCloudType;
        return this;
    }
    public set srcCloudType(srcCloudType: string  | undefined) {
        this['src_cloud_type'] = srcCloudType;
    }
    public get srcCloudType(): string | undefined {
        return this['src_cloud_type'];
    }
    public withSrcRegion(srcRegion: string): CreateSyncTaskReq {
        this['src_region'] = srcRegion;
        return this;
    }
    public set srcRegion(srcRegion: string  | undefined) {
        this['src_region'] = srcRegion;
    }
    public get srcRegion(): string | undefined {
        return this['src_region'];
    }
    public withSrcBucket(srcBucket: string): CreateSyncTaskReq {
        this['src_bucket'] = srcBucket;
        return this;
    }
    public set srcBucket(srcBucket: string  | undefined) {
        this['src_bucket'] = srcBucket;
    }
    public get srcBucket(): string | undefined {
        return this['src_bucket'];
    }
    public withSrcAk(srcAk: string): CreateSyncTaskReq {
        this['src_ak'] = srcAk;
        return this;
    }
    public set srcAk(srcAk: string  | undefined) {
        this['src_ak'] = srcAk;
    }
    public get srcAk(): string | undefined {
        return this['src_ak'];
    }
    public withSrcSk(srcSk: string): CreateSyncTaskReq {
        this['src_sk'] = srcSk;
        return this;
    }
    public set srcSk(srcSk: string  | undefined) {
        this['src_sk'] = srcSk;
    }
    public get srcSk(): string | undefined {
        return this['src_sk'];
    }
    public withSrcCryptoType(srcCryptoType: CreateSyncTaskReqSrcCryptoTypeEnum | string): CreateSyncTaskReq {
        this['src_crypto_type'] = srcCryptoType;
        return this;
    }
    public set srcCryptoType(srcCryptoType: CreateSyncTaskReqSrcCryptoTypeEnum | string  | undefined) {
        this['src_crypto_type'] = srcCryptoType;
    }
    public get srcCryptoType(): CreateSyncTaskReqSrcCryptoTypeEnum | string | undefined {
        return this['src_crypto_type'];
    }
    public withSrcKmsKeyId(srcKmsKeyId: string): CreateSyncTaskReq {
        this['src_kms_key_id'] = srcKmsKeyId;
        return this;
    }
    public set srcKmsKeyId(srcKmsKeyId: string  | undefined) {
        this['src_kms_key_id'] = srcKmsKeyId;
    }
    public get srcKmsKeyId(): string | undefined {
        return this['src_kms_key_id'];
    }
    public withDstAk(dstAk: string): CreateSyncTaskReq {
        this['dst_ak'] = dstAk;
        return this;
    }
    public set dstAk(dstAk: string  | undefined) {
        this['dst_ak'] = dstAk;
    }
    public get dstAk(): string | undefined {
        return this['dst_ak'];
    }
    public withDstSk(dstSk: string): CreateSyncTaskReq {
        this['dst_sk'] = dstSk;
        return this;
    }
    public set dstSk(dstSk: string  | undefined) {
        this['dst_sk'] = dstSk;
    }
    public get dstSk(): string | undefined {
        return this['dst_sk'];
    }
    public withDstCryptoType(dstCryptoType: CreateSyncTaskReqDstCryptoTypeEnum | string): CreateSyncTaskReq {
        this['dst_crypto_type'] = dstCryptoType;
        return this;
    }
    public set dstCryptoType(dstCryptoType: CreateSyncTaskReqDstCryptoTypeEnum | string  | undefined) {
        this['dst_crypto_type'] = dstCryptoType;
    }
    public get dstCryptoType(): CreateSyncTaskReqDstCryptoTypeEnum | string | undefined {
        return this['dst_crypto_type'];
    }
    public withDstKmsKeyId(dstKmsKeyId: string): CreateSyncTaskReq {
        this['dst_kms_key_id'] = dstKmsKeyId;
        return this;
    }
    public set dstKmsKeyId(dstKmsKeyId: string  | undefined) {
        this['dst_kms_key_id'] = dstKmsKeyId;
    }
    public get dstKmsKeyId(): string | undefined {
        return this['dst_kms_key_id'];
    }
    public withDstRegion(dstRegion: string): CreateSyncTaskReq {
        this['dst_region'] = dstRegion;
        return this;
    }
    public set dstRegion(dstRegion: string  | undefined) {
        this['dst_region'] = dstRegion;
    }
    public get dstRegion(): string | undefined {
        return this['dst_region'];
    }
    public withDstBucket(dstBucket: string): CreateSyncTaskReq {
        this['dst_bucket'] = dstBucket;
        return this;
    }
    public set dstBucket(dstBucket: string  | undefined) {
        this['dst_bucket'] = dstBucket;
    }
    public get dstBucket(): string | undefined {
        return this['dst_bucket'];
    }
    public withDescription(description: string): CreateSyncTaskReq {
        this['description'] = description;
        return this;
    }
    public withEnableMetadataMigration(enableMetadataMigration: boolean): CreateSyncTaskReq {
        this['enable_metadata_migration'] = enableMetadataMigration;
        return this;
    }
    public set enableMetadataMigration(enableMetadataMigration: boolean  | undefined) {
        this['enable_metadata_migration'] = enableMetadataMigration;
    }
    public get enableMetadataMigration(): boolean | undefined {
        return this['enable_metadata_migration'];
    }
    public withEnableRestore(enableRestore: boolean): CreateSyncTaskReq {
        this['enable_restore'] = enableRestore;
        return this;
    }
    public set enableRestore(enableRestore: boolean  | undefined) {
        this['enable_restore'] = enableRestore;
    }
    public get enableRestore(): boolean | undefined {
        return this['enable_restore'];
    }
    public withDstStoragePolicy(dstStoragePolicy: CreateSyncTaskReqDstStoragePolicyEnum | string): CreateSyncTaskReq {
        this['dst_storage_policy'] = dstStoragePolicy;
        return this;
    }
    public set dstStoragePolicy(dstStoragePolicy: CreateSyncTaskReqDstStoragePolicyEnum | string  | undefined) {
        this['dst_storage_policy'] = dstStoragePolicy;
    }
    public get dstStoragePolicy(): CreateSyncTaskReqDstStoragePolicyEnum | string | undefined {
        return this['dst_storage_policy'];
    }
    public withAppId(appId: string): CreateSyncTaskReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withSourceCdn(sourceCdn: SourceCdnReq): CreateSyncTaskReq {
        this['source_cdn'] = sourceCdn;
        return this;
    }
    public set sourceCdn(sourceCdn: SourceCdnReq  | undefined) {
        this['source_cdn'] = sourceCdn;
    }
    public get sourceCdn(): SourceCdnReq | undefined {
        return this['source_cdn'];
    }
    public withConsistencyCheck(consistencyCheck: CreateSyncTaskReqConsistencyCheckEnum | string): CreateSyncTaskReq {
        this['consistency_check'] = consistencyCheck;
        return this;
    }
    public set consistencyCheck(consistencyCheck: CreateSyncTaskReqConsistencyCheckEnum | string  | undefined) {
        this['consistency_check'] = consistencyCheck;
    }
    public get consistencyCheck(): CreateSyncTaskReqConsistencyCheckEnum | string | undefined {
        return this['consistency_check'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSyncTaskReqSrcCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSyncTaskReqDstCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSyncTaskReqDstStoragePolicyEnum {
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
export enum CreateSyncTaskReqConsistencyCheckEnum {
    SIZE_LAST_MODIFIED = 'size_last_modified',
    CRC64 = 'crc64',
    TRANSMISSION = 'transmission'
}

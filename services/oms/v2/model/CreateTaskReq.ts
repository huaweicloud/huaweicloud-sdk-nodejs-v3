import { BandwidthPolicyDto } from './BandwidthPolicyDto';
import { DstNodeReq } from './DstNodeReq';
import { SmnConfig } from './SmnConfig';
import { SourceCdnReq } from './SourceCdnReq';
import { SrcNodeReq } from './SrcNodeReq';


export class CreateTaskReq {
    private 'task_type'?: CreateTaskReqTaskTypeEnum | undefined;
    private 'src_node': SrcNodeReq | undefined;
    private 'dst_node': DstNodeReq | undefined;
    private 'enable_kms'?: boolean | undefined;
    public description?: string;
    private 'migrate_since'?: number | undefined;
    private 'bandwidth_policy'?: Array<BandwidthPolicyDto> | undefined;
    private 'source_cdn'?: SourceCdnReq | undefined;
    private 'smn_config'?: SmnConfig | undefined;
    private 'enable_metadata_migration'?: boolean | undefined;
    private 'enable_restore'?: boolean | undefined;
    private 'enable_failed_object_recording'?: boolean | undefined;
    private 'object_overwrite_mode'?: CreateTaskReqObjectOverwriteModeEnum | undefined;
    private 'consistency_check'?: CreateTaskReqConsistencyCheckEnum | undefined;
    private 'enable_requester_pays'?: boolean | undefined;
    public constructor(srcNode?: any, dstNode?: any) { 
        this['src_node'] = srcNode;
        this['dst_node'] = dstNode;
    }
    public withTaskType(taskType: CreateTaskReqTaskTypeEnum): CreateTaskReq {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: CreateTaskReqTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withSrcNode(srcNode: SrcNodeReq): CreateTaskReq {
        this['src_node'] = srcNode;
        return this;
    }
    public set srcNode(srcNode: SrcNodeReq | undefined) {
        this['src_node'] = srcNode;
    }
    public get srcNode() {
        return this['src_node'];
    }
    public withDstNode(dstNode: DstNodeReq): CreateTaskReq {
        this['dst_node'] = dstNode;
        return this;
    }
    public set dstNode(dstNode: DstNodeReq | undefined) {
        this['dst_node'] = dstNode;
    }
    public get dstNode() {
        return this['dst_node'];
    }
    public withEnableKms(enableKms: boolean): CreateTaskReq {
        this['enable_kms'] = enableKms;
        return this;
    }
    public set enableKms(enableKms: boolean | undefined) {
        this['enable_kms'] = enableKms;
    }
    public get enableKms() {
        return this['enable_kms'];
    }
    public withDescription(description: string): CreateTaskReq {
        this['description'] = description;
        return this;
    }
    public withMigrateSince(migrateSince: number): CreateTaskReq {
        this['migrate_since'] = migrateSince;
        return this;
    }
    public set migrateSince(migrateSince: number | undefined) {
        this['migrate_since'] = migrateSince;
    }
    public get migrateSince() {
        return this['migrate_since'];
    }
    public withBandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>): CreateTaskReq {
        this['bandwidth_policy'] = bandwidthPolicy;
        return this;
    }
    public set bandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto> | undefined) {
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public get bandwidthPolicy() {
        return this['bandwidth_policy'];
    }
    public withSourceCdn(sourceCdn: SourceCdnReq): CreateTaskReq {
        this['source_cdn'] = sourceCdn;
        return this;
    }
    public set sourceCdn(sourceCdn: SourceCdnReq | undefined) {
        this['source_cdn'] = sourceCdn;
    }
    public get sourceCdn() {
        return this['source_cdn'];
    }
    public withSmnConfig(smnConfig: SmnConfig): CreateTaskReq {
        this['smn_config'] = smnConfig;
        return this;
    }
    public set smnConfig(smnConfig: SmnConfig | undefined) {
        this['smn_config'] = smnConfig;
    }
    public get smnConfig() {
        return this['smn_config'];
    }
    public withEnableMetadataMigration(enableMetadataMigration: boolean): CreateTaskReq {
        this['enable_metadata_migration'] = enableMetadataMigration;
        return this;
    }
    public set enableMetadataMigration(enableMetadataMigration: boolean | undefined) {
        this['enable_metadata_migration'] = enableMetadataMigration;
    }
    public get enableMetadataMigration() {
        return this['enable_metadata_migration'];
    }
    public withEnableRestore(enableRestore: boolean): CreateTaskReq {
        this['enable_restore'] = enableRestore;
        return this;
    }
    public set enableRestore(enableRestore: boolean | undefined) {
        this['enable_restore'] = enableRestore;
    }
    public get enableRestore() {
        return this['enable_restore'];
    }
    public withEnableFailedObjectRecording(enableFailedObjectRecording: boolean): CreateTaskReq {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
        return this;
    }
    public set enableFailedObjectRecording(enableFailedObjectRecording: boolean | undefined) {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
    }
    public get enableFailedObjectRecording() {
        return this['enable_failed_object_recording'];
    }
    public withObjectOverwriteMode(objectOverwriteMode: CreateTaskReqObjectOverwriteModeEnum): CreateTaskReq {
        this['object_overwrite_mode'] = objectOverwriteMode;
        return this;
    }
    public set objectOverwriteMode(objectOverwriteMode: CreateTaskReqObjectOverwriteModeEnum | undefined) {
        this['object_overwrite_mode'] = objectOverwriteMode;
    }
    public get objectOverwriteMode() {
        return this['object_overwrite_mode'];
    }
    public withConsistencyCheck(consistencyCheck: CreateTaskReqConsistencyCheckEnum): CreateTaskReq {
        this['consistency_check'] = consistencyCheck;
        return this;
    }
    public set consistencyCheck(consistencyCheck: CreateTaskReqConsistencyCheckEnum | undefined) {
        this['consistency_check'] = consistencyCheck;
    }
    public get consistencyCheck() {
        return this['consistency_check'];
    }
    public withEnableRequesterPays(enableRequesterPays: boolean): CreateTaskReq {
        this['enable_requester_pays'] = enableRequesterPays;
        return this;
    }
    public set enableRequesterPays(enableRequesterPays: boolean | undefined) {
        this['enable_requester_pays'] = enableRequesterPays;
    }
    public get enableRequesterPays() {
        return this['enable_requester_pays'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTaskReqTaskTypeEnum {
    LIST = 'list',
    URL_LIST = 'url_list',
    OBJECT = 'object',
    PREFIX = 'prefix'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTaskReqObjectOverwriteModeEnum {
    NO_OVERWRITE = 'NO_OVERWRITE',
    SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE = 'SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE',
    CRC64_COMPARISON_OVERWRITE = 'CRC64_COMPARISON_OVERWRITE',
    FULL_OVERWRITE = 'FULL_OVERWRITE'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTaskReqConsistencyCheckEnum {
    SIZE_LAST_MODIFIED = 'size_last_modified',
    CRC64 = 'crc64',
    NO_CHECK = 'no_check'
}

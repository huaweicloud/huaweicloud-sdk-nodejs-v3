import { BandwidthPolicyDto } from './BandwidthPolicyDto';
import { SmnConfig } from './SmnConfig';
import { SourceCdnReq } from './SourceCdnReq';
import { TaskGroupDstNode } from './TaskGroupDstNode';
import { TaskGroupSrcNode } from './TaskGroupSrcNode';


export class CreateTaskGroupReq {
    private 'src_node': TaskGroupSrcNode | undefined;
    public description?: string;
    private 'dst_node': TaskGroupDstNode | undefined;
    private 'enable_metadata_migration'?: boolean | undefined;
    private 'enable_failed_object_recording'?: boolean | undefined;
    private 'enable_restore'?: boolean | undefined;
    private 'enable_kms': boolean | undefined;
    private 'task_type'?: CreateTaskGroupReqTaskTypeEnum | undefined;
    private 'bandwidth_policy'?: Array<BandwidthPolicyDto> | undefined;
    private 'smn_config'?: SmnConfig | undefined;
    private 'source_cdn'?: SourceCdnReq | undefined;
    private 'migrate_since'?: number | undefined;
    private 'object_overwrite_mode'?: CreateTaskGroupReqObjectOverwriteModeEnum | undefined;
    private 'consistency_check'?: CreateTaskGroupReqConsistencyCheckEnum | undefined;
    private 'enable_requester_pays'?: boolean | undefined;
    public constructor(srcNode?: any, dstNode?: any, enableKms?: any) { 
        this['src_node'] = srcNode;
        this['dst_node'] = dstNode;
        this['enable_kms'] = enableKms;
    }
    public withSrcNode(srcNode: TaskGroupSrcNode): CreateTaskGroupReq {
        this['src_node'] = srcNode;
        return this;
    }
    public set srcNode(srcNode: TaskGroupSrcNode | undefined) {
        this['src_node'] = srcNode;
    }
    public get srcNode() {
        return this['src_node'];
    }
    public withDescription(description: string): CreateTaskGroupReq {
        this['description'] = description;
        return this;
    }
    public withDstNode(dstNode: TaskGroupDstNode): CreateTaskGroupReq {
        this['dst_node'] = dstNode;
        return this;
    }
    public set dstNode(dstNode: TaskGroupDstNode | undefined) {
        this['dst_node'] = dstNode;
    }
    public get dstNode() {
        return this['dst_node'];
    }
    public withEnableMetadataMigration(enableMetadataMigration: boolean): CreateTaskGroupReq {
        this['enable_metadata_migration'] = enableMetadataMigration;
        return this;
    }
    public set enableMetadataMigration(enableMetadataMigration: boolean | undefined) {
        this['enable_metadata_migration'] = enableMetadataMigration;
    }
    public get enableMetadataMigration() {
        return this['enable_metadata_migration'];
    }
    public withEnableFailedObjectRecording(enableFailedObjectRecording: boolean): CreateTaskGroupReq {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
        return this;
    }
    public set enableFailedObjectRecording(enableFailedObjectRecording: boolean | undefined) {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
    }
    public get enableFailedObjectRecording() {
        return this['enable_failed_object_recording'];
    }
    public withEnableRestore(enableRestore: boolean): CreateTaskGroupReq {
        this['enable_restore'] = enableRestore;
        return this;
    }
    public set enableRestore(enableRestore: boolean | undefined) {
        this['enable_restore'] = enableRestore;
    }
    public get enableRestore() {
        return this['enable_restore'];
    }
    public withEnableKms(enableKms: boolean): CreateTaskGroupReq {
        this['enable_kms'] = enableKms;
        return this;
    }
    public set enableKms(enableKms: boolean | undefined) {
        this['enable_kms'] = enableKms;
    }
    public get enableKms() {
        return this['enable_kms'];
    }
    public withTaskType(taskType: CreateTaskGroupReqTaskTypeEnum): CreateTaskGroupReq {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: CreateTaskGroupReqTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withBandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>): CreateTaskGroupReq {
        this['bandwidth_policy'] = bandwidthPolicy;
        return this;
    }
    public set bandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto> | undefined) {
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public get bandwidthPolicy() {
        return this['bandwidth_policy'];
    }
    public withSmnConfig(smnConfig: SmnConfig): CreateTaskGroupReq {
        this['smn_config'] = smnConfig;
        return this;
    }
    public set smnConfig(smnConfig: SmnConfig | undefined) {
        this['smn_config'] = smnConfig;
    }
    public get smnConfig() {
        return this['smn_config'];
    }
    public withSourceCdn(sourceCdn: SourceCdnReq): CreateTaskGroupReq {
        this['source_cdn'] = sourceCdn;
        return this;
    }
    public set sourceCdn(sourceCdn: SourceCdnReq | undefined) {
        this['source_cdn'] = sourceCdn;
    }
    public get sourceCdn() {
        return this['source_cdn'];
    }
    public withMigrateSince(migrateSince: number): CreateTaskGroupReq {
        this['migrate_since'] = migrateSince;
        return this;
    }
    public set migrateSince(migrateSince: number | undefined) {
        this['migrate_since'] = migrateSince;
    }
    public get migrateSince() {
        return this['migrate_since'];
    }
    public withObjectOverwriteMode(objectOverwriteMode: CreateTaskGroupReqObjectOverwriteModeEnum): CreateTaskGroupReq {
        this['object_overwrite_mode'] = objectOverwriteMode;
        return this;
    }
    public set objectOverwriteMode(objectOverwriteMode: CreateTaskGroupReqObjectOverwriteModeEnum | undefined) {
        this['object_overwrite_mode'] = objectOverwriteMode;
    }
    public get objectOverwriteMode() {
        return this['object_overwrite_mode'];
    }
    public withConsistencyCheck(consistencyCheck: CreateTaskGroupReqConsistencyCheckEnum): CreateTaskGroupReq {
        this['consistency_check'] = consistencyCheck;
        return this;
    }
    public set consistencyCheck(consistencyCheck: CreateTaskGroupReqConsistencyCheckEnum | undefined) {
        this['consistency_check'] = consistencyCheck;
    }
    public get consistencyCheck() {
        return this['consistency_check'];
    }
    public withEnableRequesterPays(enableRequesterPays: boolean): CreateTaskGroupReq {
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
export enum CreateTaskGroupReqTaskTypeEnum {
    LIST = 'LIST',
    URL_LIST = 'URL_LIST',
    PREFIX = 'PREFIX'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTaskGroupReqObjectOverwriteModeEnum {
    NO_OVERWRITE = 'NO_OVERWRITE',
    SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE = 'SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE',
    CRC64_COMPARISON_OVERWRITE = 'CRC64_COMPARISON_OVERWRITE',
    FULL_OVERWRITE = 'FULL_OVERWRITE'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTaskGroupReqConsistencyCheckEnum {
    SIZE_LAST_MODIFIED = 'size_last_modified',
    CRC64 = 'crc64',
    NO_CHECK = 'no_check'
}

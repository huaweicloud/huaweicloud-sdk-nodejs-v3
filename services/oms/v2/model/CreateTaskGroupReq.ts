import { BandwidthPolicyDto } from './BandwidthPolicyDto';
import { SmnConfig } from './SmnConfig';
import { SourceCdnReq } from './SourceCdnReq';
import { TaskGroupDstNode } from './TaskGroupDstNode';
import { TaskGroupSrcNode } from './TaskGroupSrcNode';


export class CreateTaskGroupReq {
    private 'src_node'?: TaskGroupSrcNode;
    public description?: string;
    private 'dst_node'?: TaskGroupDstNode;
    private 'enable_metadata_migration'?: boolean;
    private 'enable_failed_object_recording'?: boolean;
    private 'enable_restore'?: boolean;
    private 'enable_kms'?: boolean;
    private 'task_type'?: CreateTaskGroupReqTaskTypeEnum | string;
    private 'bandwidth_policy'?: Array<BandwidthPolicyDto>;
    private 'smn_config'?: SmnConfig;
    private 'source_cdn'?: SourceCdnReq;
    private 'migrate_since'?: number;
    private 'object_overwrite_mode'?: CreateTaskGroupReqObjectOverwriteModeEnum | string;
    private 'dst_storage_policy'?: CreateTaskGroupReqDstStoragePolicyEnum | string;
    private 'consistency_check'?: CreateTaskGroupReqConsistencyCheckEnum | string;
    private 'enable_requester_pays'?: boolean;
    public constructor(srcNode?: TaskGroupSrcNode, dstNode?: TaskGroupDstNode, enableKms?: boolean) { 
        this['src_node'] = srcNode;
        this['dst_node'] = dstNode;
        this['enable_kms'] = enableKms;
    }
    public withSrcNode(srcNode: TaskGroupSrcNode): CreateTaskGroupReq {
        this['src_node'] = srcNode;
        return this;
    }
    public set srcNode(srcNode: TaskGroupSrcNode  | undefined) {
        this['src_node'] = srcNode;
    }
    public get srcNode(): TaskGroupSrcNode | undefined {
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
    public set dstNode(dstNode: TaskGroupDstNode  | undefined) {
        this['dst_node'] = dstNode;
    }
    public get dstNode(): TaskGroupDstNode | undefined {
        return this['dst_node'];
    }
    public withEnableMetadataMigration(enableMetadataMigration: boolean): CreateTaskGroupReq {
        this['enable_metadata_migration'] = enableMetadataMigration;
        return this;
    }
    public set enableMetadataMigration(enableMetadataMigration: boolean  | undefined) {
        this['enable_metadata_migration'] = enableMetadataMigration;
    }
    public get enableMetadataMigration(): boolean | undefined {
        return this['enable_metadata_migration'];
    }
    public withEnableFailedObjectRecording(enableFailedObjectRecording: boolean): CreateTaskGroupReq {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
        return this;
    }
    public set enableFailedObjectRecording(enableFailedObjectRecording: boolean  | undefined) {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
    }
    public get enableFailedObjectRecording(): boolean | undefined {
        return this['enable_failed_object_recording'];
    }
    public withEnableRestore(enableRestore: boolean): CreateTaskGroupReq {
        this['enable_restore'] = enableRestore;
        return this;
    }
    public set enableRestore(enableRestore: boolean  | undefined) {
        this['enable_restore'] = enableRestore;
    }
    public get enableRestore(): boolean | undefined {
        return this['enable_restore'];
    }
    public withEnableKms(enableKms: boolean): CreateTaskGroupReq {
        this['enable_kms'] = enableKms;
        return this;
    }
    public set enableKms(enableKms: boolean  | undefined) {
        this['enable_kms'] = enableKms;
    }
    public get enableKms(): boolean | undefined {
        return this['enable_kms'];
    }
    public withTaskType(taskType: CreateTaskGroupReqTaskTypeEnum | string): CreateTaskGroupReq {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: CreateTaskGroupReqTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): CreateTaskGroupReqTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withBandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>): CreateTaskGroupReq {
        this['bandwidth_policy'] = bandwidthPolicy;
        return this;
    }
    public set bandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>  | undefined) {
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public get bandwidthPolicy(): Array<BandwidthPolicyDto> | undefined {
        return this['bandwidth_policy'];
    }
    public withSmnConfig(smnConfig: SmnConfig): CreateTaskGroupReq {
        this['smn_config'] = smnConfig;
        return this;
    }
    public set smnConfig(smnConfig: SmnConfig  | undefined) {
        this['smn_config'] = smnConfig;
    }
    public get smnConfig(): SmnConfig | undefined {
        return this['smn_config'];
    }
    public withSourceCdn(sourceCdn: SourceCdnReq): CreateTaskGroupReq {
        this['source_cdn'] = sourceCdn;
        return this;
    }
    public set sourceCdn(sourceCdn: SourceCdnReq  | undefined) {
        this['source_cdn'] = sourceCdn;
    }
    public get sourceCdn(): SourceCdnReq | undefined {
        return this['source_cdn'];
    }
    public withMigrateSince(migrateSince: number): CreateTaskGroupReq {
        this['migrate_since'] = migrateSince;
        return this;
    }
    public set migrateSince(migrateSince: number  | undefined) {
        this['migrate_since'] = migrateSince;
    }
    public get migrateSince(): number | undefined {
        return this['migrate_since'];
    }
    public withObjectOverwriteMode(objectOverwriteMode: CreateTaskGroupReqObjectOverwriteModeEnum | string): CreateTaskGroupReq {
        this['object_overwrite_mode'] = objectOverwriteMode;
        return this;
    }
    public set objectOverwriteMode(objectOverwriteMode: CreateTaskGroupReqObjectOverwriteModeEnum | string  | undefined) {
        this['object_overwrite_mode'] = objectOverwriteMode;
    }
    public get objectOverwriteMode(): CreateTaskGroupReqObjectOverwriteModeEnum | string | undefined {
        return this['object_overwrite_mode'];
    }
    public withDstStoragePolicy(dstStoragePolicy: CreateTaskGroupReqDstStoragePolicyEnum | string): CreateTaskGroupReq {
        this['dst_storage_policy'] = dstStoragePolicy;
        return this;
    }
    public set dstStoragePolicy(dstStoragePolicy: CreateTaskGroupReqDstStoragePolicyEnum | string  | undefined) {
        this['dst_storage_policy'] = dstStoragePolicy;
    }
    public get dstStoragePolicy(): CreateTaskGroupReqDstStoragePolicyEnum | string | undefined {
        return this['dst_storage_policy'];
    }
    public withConsistencyCheck(consistencyCheck: CreateTaskGroupReqConsistencyCheckEnum | string): CreateTaskGroupReq {
        this['consistency_check'] = consistencyCheck;
        return this;
    }
    public set consistencyCheck(consistencyCheck: CreateTaskGroupReqConsistencyCheckEnum | string  | undefined) {
        this['consistency_check'] = consistencyCheck;
    }
    public get consistencyCheck(): CreateTaskGroupReqConsistencyCheckEnum | string | undefined {
        return this['consistency_check'];
    }
    public withEnableRequesterPays(enableRequesterPays: boolean): CreateTaskGroupReq {
        this['enable_requester_pays'] = enableRequesterPays;
        return this;
    }
    public set enableRequesterPays(enableRequesterPays: boolean  | undefined) {
        this['enable_requester_pays'] = enableRequesterPays;
    }
    public get enableRequesterPays(): boolean | undefined {
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
export enum CreateTaskGroupReqDstStoragePolicyEnum {
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
export enum CreateTaskGroupReqConsistencyCheckEnum {
    SIZE_LAST_MODIFIED = 'size_last_modified',
    CRC64 = 'crc64',
    NO_CHECK = 'no_check'
}

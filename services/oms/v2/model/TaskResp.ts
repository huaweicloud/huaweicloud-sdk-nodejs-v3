import { BandwidthPolicyDto } from './BandwidthPolicyDto';
import { DstNodeResp } from './DstNodeResp';
import { ErrorReasonResp } from './ErrorReasonResp';
import { FailedObjectRecordDto } from './FailedObjectRecordDto';
import { SmnInfo } from './SmnInfo';
import { SourceCdnResp } from './SourceCdnResp';
import { SrcNodeResp } from './SrcNodeResp';


export class TaskResp {
    private 'bandwidth_policy'?: Array<BandwidthPolicyDto>;
    private 'complete_size'?: number;
    public description?: string;
    private 'dst_node'?: DstNodeResp;
    private 'enable_failed_object_recording'?: boolean;
    private 'enable_kms'?: boolean;
    private 'enable_metadata_migration'?: boolean;
    private 'enable_restore'?: boolean;
    private 'error_reason'?: ErrorReasonResp;
    private 'failed_num'?: number;
    private 'failed_object_record'?: FailedObjectRecordDto;
    private 'group_id'?: string;
    public id?: number;
    private 'is_query_over'?: boolean;
    private 'left_time'?: number;
    private 'migrate_since'?: number;
    private 'migrate_speed'?: number;
    public name?: string;
    public progress?: number;
    private 'real_size'?: number;
    private 'skipped_num'?: number;
    private 'src_node'?: SrcNodeResp;
    private 'start_time'?: number;
    public status?: number;
    private 'successful_num'?: number;
    private 'task_type'?: TaskRespTaskTypeEnum | string;
    private 'group_type'?: TaskRespGroupTypeEnum | string;
    private 'total_num'?: number;
    private 'total_size'?: number;
    private 'total_time'?: number;
    private 'smn_info'?: SmnInfo;
    private 'source_cdn'?: SourceCdnResp;
    private 'success_record_error_reason'?: string;
    private 'skip_record_error_reason'?: string;
    private 'object_overwrite_mode'?: TaskRespObjectOverwriteModeEnum | string;
    private 'consistency_check'?: TaskRespConsistencyCheckEnum | string;
    private 'enable_requester_pays'?: boolean;
    public constructor() { 
    }
    public withBandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>): TaskResp {
        this['bandwidth_policy'] = bandwidthPolicy;
        return this;
    }
    public set bandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>  | undefined) {
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public get bandwidthPolicy(): Array<BandwidthPolicyDto> | undefined {
        return this['bandwidth_policy'];
    }
    public withCompleteSize(completeSize: number): TaskResp {
        this['complete_size'] = completeSize;
        return this;
    }
    public set completeSize(completeSize: number  | undefined) {
        this['complete_size'] = completeSize;
    }
    public get completeSize(): number | undefined {
        return this['complete_size'];
    }
    public withDescription(description: string): TaskResp {
        this['description'] = description;
        return this;
    }
    public withDstNode(dstNode: DstNodeResp): TaskResp {
        this['dst_node'] = dstNode;
        return this;
    }
    public set dstNode(dstNode: DstNodeResp  | undefined) {
        this['dst_node'] = dstNode;
    }
    public get dstNode(): DstNodeResp | undefined {
        return this['dst_node'];
    }
    public withEnableFailedObjectRecording(enableFailedObjectRecording: boolean): TaskResp {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
        return this;
    }
    public set enableFailedObjectRecording(enableFailedObjectRecording: boolean  | undefined) {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
    }
    public get enableFailedObjectRecording(): boolean | undefined {
        return this['enable_failed_object_recording'];
    }
    public withEnableKms(enableKms: boolean): TaskResp {
        this['enable_kms'] = enableKms;
        return this;
    }
    public set enableKms(enableKms: boolean  | undefined) {
        this['enable_kms'] = enableKms;
    }
    public get enableKms(): boolean | undefined {
        return this['enable_kms'];
    }
    public withEnableMetadataMigration(enableMetadataMigration: boolean): TaskResp {
        this['enable_metadata_migration'] = enableMetadataMigration;
        return this;
    }
    public set enableMetadataMigration(enableMetadataMigration: boolean  | undefined) {
        this['enable_metadata_migration'] = enableMetadataMigration;
    }
    public get enableMetadataMigration(): boolean | undefined {
        return this['enable_metadata_migration'];
    }
    public withEnableRestore(enableRestore: boolean): TaskResp {
        this['enable_restore'] = enableRestore;
        return this;
    }
    public set enableRestore(enableRestore: boolean  | undefined) {
        this['enable_restore'] = enableRestore;
    }
    public get enableRestore(): boolean | undefined {
        return this['enable_restore'];
    }
    public withErrorReason(errorReason: ErrorReasonResp): TaskResp {
        this['error_reason'] = errorReason;
        return this;
    }
    public set errorReason(errorReason: ErrorReasonResp  | undefined) {
        this['error_reason'] = errorReason;
    }
    public get errorReason(): ErrorReasonResp | undefined {
        return this['error_reason'];
    }
    public withFailedNum(failedNum: number): TaskResp {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withFailedObjectRecord(failedObjectRecord: FailedObjectRecordDto): TaskResp {
        this['failed_object_record'] = failedObjectRecord;
        return this;
    }
    public set failedObjectRecord(failedObjectRecord: FailedObjectRecordDto  | undefined) {
        this['failed_object_record'] = failedObjectRecord;
    }
    public get failedObjectRecord(): FailedObjectRecordDto | undefined {
        return this['failed_object_record'];
    }
    public withGroupId(groupId: string): TaskResp {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withId(id: number): TaskResp {
        this['id'] = id;
        return this;
    }
    public withIsQueryOver(isQueryOver: boolean): TaskResp {
        this['is_query_over'] = isQueryOver;
        return this;
    }
    public set isQueryOver(isQueryOver: boolean  | undefined) {
        this['is_query_over'] = isQueryOver;
    }
    public get isQueryOver(): boolean | undefined {
        return this['is_query_over'];
    }
    public withLeftTime(leftTime: number): TaskResp {
        this['left_time'] = leftTime;
        return this;
    }
    public set leftTime(leftTime: number  | undefined) {
        this['left_time'] = leftTime;
    }
    public get leftTime(): number | undefined {
        return this['left_time'];
    }
    public withMigrateSince(migrateSince: number): TaskResp {
        this['migrate_since'] = migrateSince;
        return this;
    }
    public set migrateSince(migrateSince: number  | undefined) {
        this['migrate_since'] = migrateSince;
    }
    public get migrateSince(): number | undefined {
        return this['migrate_since'];
    }
    public withMigrateSpeed(migrateSpeed: number): TaskResp {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number  | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed(): number | undefined {
        return this['migrate_speed'];
    }
    public withName(name: string): TaskResp {
        this['name'] = name;
        return this;
    }
    public withProgress(progress: number): TaskResp {
        this['progress'] = progress;
        return this;
    }
    public withRealSize(realSize: number): TaskResp {
        this['real_size'] = realSize;
        return this;
    }
    public set realSize(realSize: number  | undefined) {
        this['real_size'] = realSize;
    }
    public get realSize(): number | undefined {
        return this['real_size'];
    }
    public withSkippedNum(skippedNum: number): TaskResp {
        this['skipped_num'] = skippedNum;
        return this;
    }
    public set skippedNum(skippedNum: number  | undefined) {
        this['skipped_num'] = skippedNum;
    }
    public get skippedNum(): number | undefined {
        return this['skipped_num'];
    }
    public withSrcNode(srcNode: SrcNodeResp): TaskResp {
        this['src_node'] = srcNode;
        return this;
    }
    public set srcNode(srcNode: SrcNodeResp  | undefined) {
        this['src_node'] = srcNode;
    }
    public get srcNode(): SrcNodeResp | undefined {
        return this['src_node'];
    }
    public withStartTime(startTime: number): TaskResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withStatus(status: number): TaskResp {
        this['status'] = status;
        return this;
    }
    public withSuccessfulNum(successfulNum: number): TaskResp {
        this['successful_num'] = successfulNum;
        return this;
    }
    public set successfulNum(successfulNum: number  | undefined) {
        this['successful_num'] = successfulNum;
    }
    public get successfulNum(): number | undefined {
        return this['successful_num'];
    }
    public withTaskType(taskType: TaskRespTaskTypeEnum | string): TaskResp {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: TaskRespTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): TaskRespTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withGroupType(groupType: TaskRespGroupTypeEnum | string): TaskResp {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: TaskRespGroupTypeEnum | string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): TaskRespGroupTypeEnum | string | undefined {
        return this['group_type'];
    }
    public withTotalNum(totalNum: number): TaskResp {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withTotalSize(totalSize: number): TaskResp {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['total_size'];
    }
    public withTotalTime(totalTime: number): TaskResp {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number  | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime(): number | undefined {
        return this['total_time'];
    }
    public withSmnInfo(smnInfo: SmnInfo): TaskResp {
        this['smn_info'] = smnInfo;
        return this;
    }
    public set smnInfo(smnInfo: SmnInfo  | undefined) {
        this['smn_info'] = smnInfo;
    }
    public get smnInfo(): SmnInfo | undefined {
        return this['smn_info'];
    }
    public withSourceCdn(sourceCdn: SourceCdnResp): TaskResp {
        this['source_cdn'] = sourceCdn;
        return this;
    }
    public set sourceCdn(sourceCdn: SourceCdnResp  | undefined) {
        this['source_cdn'] = sourceCdn;
    }
    public get sourceCdn(): SourceCdnResp | undefined {
        return this['source_cdn'];
    }
    public withSuccessRecordErrorReason(successRecordErrorReason: string): TaskResp {
        this['success_record_error_reason'] = successRecordErrorReason;
        return this;
    }
    public set successRecordErrorReason(successRecordErrorReason: string  | undefined) {
        this['success_record_error_reason'] = successRecordErrorReason;
    }
    public get successRecordErrorReason(): string | undefined {
        return this['success_record_error_reason'];
    }
    public withSkipRecordErrorReason(skipRecordErrorReason: string): TaskResp {
        this['skip_record_error_reason'] = skipRecordErrorReason;
        return this;
    }
    public set skipRecordErrorReason(skipRecordErrorReason: string  | undefined) {
        this['skip_record_error_reason'] = skipRecordErrorReason;
    }
    public get skipRecordErrorReason(): string | undefined {
        return this['skip_record_error_reason'];
    }
    public withObjectOverwriteMode(objectOverwriteMode: TaskRespObjectOverwriteModeEnum | string): TaskResp {
        this['object_overwrite_mode'] = objectOverwriteMode;
        return this;
    }
    public set objectOverwriteMode(objectOverwriteMode: TaskRespObjectOverwriteModeEnum | string  | undefined) {
        this['object_overwrite_mode'] = objectOverwriteMode;
    }
    public get objectOverwriteMode(): TaskRespObjectOverwriteModeEnum | string | undefined {
        return this['object_overwrite_mode'];
    }
    public withConsistencyCheck(consistencyCheck: TaskRespConsistencyCheckEnum | string): TaskResp {
        this['consistency_check'] = consistencyCheck;
        return this;
    }
    public set consistencyCheck(consistencyCheck: TaskRespConsistencyCheckEnum | string  | undefined) {
        this['consistency_check'] = consistencyCheck;
    }
    public get consistencyCheck(): TaskRespConsistencyCheckEnum | string | undefined {
        return this['consistency_check'];
    }
    public withEnableRequesterPays(enableRequesterPays: boolean): TaskResp {
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
export enum TaskRespTaskTypeEnum {
    LIST = 'list',
    OBJECT = 'object',
    PREFIX = 'prefix',
    URL_LIST = 'url_list'
}
/**
    * @export
    * @enum {string}
    */
export enum TaskRespGroupTypeEnum {
    NORMAL_TASK = 'NORMAL_TASK',
    SYNC_TASK = 'SYNC_TASK',
    GROUP_TASK = 'GROUP_TASK'
}
/**
    * @export
    * @enum {string}
    */
export enum TaskRespObjectOverwriteModeEnum {
    NO_OVERWRITE = 'NO_OVERWRITE',
    SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE = 'SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE',
    CRC64_COMPARISON_OVERWRITE = 'CRC64_COMPARISON_OVERWRITE',
    FULL_OVERWRITE = 'FULL_OVERWRITE'
}
/**
    * @export
    * @enum {string}
    */
export enum TaskRespConsistencyCheckEnum {
    SIZE_LAST_MODIFIED = 'size_last_modified',
    CRC64 = 'crc64',
    NO_CHECK = 'no_check'
}

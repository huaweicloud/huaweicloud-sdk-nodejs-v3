import { BandwidthPolicyDto } from './BandwidthPolicyDto';
import { ErrorReasonResp } from './ErrorReasonResp';
import { FailedObjectRecordDto } from './FailedObjectRecordDto';
import { SmnInfo } from './SmnInfo';
import { SourceCdnResp } from './SourceCdnResp';
import { TaskGroupDstNodeResp } from './TaskGroupDstNodeResp';
import { TaskGroupSrcNodeResp } from './TaskGroupSrcNodeResp';


export class TaskGroupResp {
    private 'group_id'?: string | undefined;
    public status?: number;
    private 'error_reason'?: ErrorReasonResp | undefined;
    private 'src_node'?: TaskGroupSrcNodeResp | undefined;
    public description?: string;
    private 'dst_node'?: TaskGroupDstNodeResp | undefined;
    private 'enable_metadata_migration'?: boolean | undefined;
    private 'enable_failed_object_recording'?: boolean | undefined;
    private 'enable_restore'?: boolean | undefined;
    private 'enable_kms'?: boolean | undefined;
    private 'task_type'?: TaskGroupRespTaskTypeEnum | undefined;
    private 'bandwidth_policy'?: Array<BandwidthPolicyDto> | undefined;
    private 'smn_config'?: SmnInfo | undefined;
    private 'source_cdn'?: SourceCdnResp | undefined;
    private 'migrate_since'?: number | undefined;
    private 'migrate_speed'?: number | undefined;
    private 'total_time'?: number | undefined;
    private 'start_time'?: number | undefined;
    private 'total_task_num'?: number | undefined;
    private 'create_task_num'?: number | undefined;
    private 'failed_task_num'?: number | undefined;
    private 'complete_task_num'?: number | undefined;
    private 'paused_task_num'?: number | undefined;
    private 'executing_task_num'?: number | undefined;
    private 'waiting_task_num'?: number | undefined;
    private 'total_num'?: number | undefined;
    private 'create_complete_num'?: number | undefined;
    private 'success_num'?: number | undefined;
    private 'fail_num'?: number | undefined;
    private 'skip_num'?: number | undefined;
    private 'total_size'?: number | undefined;
    private 'create_complete_size'?: number | undefined;
    private 'complete_size'?: number | undefined;
    private 'failed_object_record'?: FailedObjectRecordDto | undefined;
    private 'object_overwrite_mode'?: TaskGroupRespObjectOverwriteModeEnum | undefined;
    private 'consistency_check'?: TaskGroupRespConsistencyCheckEnum | undefined;
    private 'enable_requester_pays'?: boolean | undefined;
    public constructor() { 
    }
    public withGroupId(groupId: string): TaskGroupResp {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withStatus(status: number): TaskGroupResp {
        this['status'] = status;
        return this;
    }
    public withErrorReason(errorReason: ErrorReasonResp): TaskGroupResp {
        this['error_reason'] = errorReason;
        return this;
    }
    public set errorReason(errorReason: ErrorReasonResp | undefined) {
        this['error_reason'] = errorReason;
    }
    public get errorReason() {
        return this['error_reason'];
    }
    public withSrcNode(srcNode: TaskGroupSrcNodeResp): TaskGroupResp {
        this['src_node'] = srcNode;
        return this;
    }
    public set srcNode(srcNode: TaskGroupSrcNodeResp | undefined) {
        this['src_node'] = srcNode;
    }
    public get srcNode() {
        return this['src_node'];
    }
    public withDescription(description: string): TaskGroupResp {
        this['description'] = description;
        return this;
    }
    public withDstNode(dstNode: TaskGroupDstNodeResp): TaskGroupResp {
        this['dst_node'] = dstNode;
        return this;
    }
    public set dstNode(dstNode: TaskGroupDstNodeResp | undefined) {
        this['dst_node'] = dstNode;
    }
    public get dstNode() {
        return this['dst_node'];
    }
    public withEnableMetadataMigration(enableMetadataMigration: boolean): TaskGroupResp {
        this['enable_metadata_migration'] = enableMetadataMigration;
        return this;
    }
    public set enableMetadataMigration(enableMetadataMigration: boolean | undefined) {
        this['enable_metadata_migration'] = enableMetadataMigration;
    }
    public get enableMetadataMigration() {
        return this['enable_metadata_migration'];
    }
    public withEnableFailedObjectRecording(enableFailedObjectRecording: boolean): TaskGroupResp {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
        return this;
    }
    public set enableFailedObjectRecording(enableFailedObjectRecording: boolean | undefined) {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
    }
    public get enableFailedObjectRecording() {
        return this['enable_failed_object_recording'];
    }
    public withEnableRestore(enableRestore: boolean): TaskGroupResp {
        this['enable_restore'] = enableRestore;
        return this;
    }
    public set enableRestore(enableRestore: boolean | undefined) {
        this['enable_restore'] = enableRestore;
    }
    public get enableRestore() {
        return this['enable_restore'];
    }
    public withEnableKms(enableKms: boolean): TaskGroupResp {
        this['enable_kms'] = enableKms;
        return this;
    }
    public set enableKms(enableKms: boolean | undefined) {
        this['enable_kms'] = enableKms;
    }
    public get enableKms() {
        return this['enable_kms'];
    }
    public withTaskType(taskType: TaskGroupRespTaskTypeEnum): TaskGroupResp {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: TaskGroupRespTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withBandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>): TaskGroupResp {
        this['bandwidth_policy'] = bandwidthPolicy;
        return this;
    }
    public set bandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto> | undefined) {
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public get bandwidthPolicy() {
        return this['bandwidth_policy'];
    }
    public withSmnConfig(smnConfig: SmnInfo): TaskGroupResp {
        this['smn_config'] = smnConfig;
        return this;
    }
    public set smnConfig(smnConfig: SmnInfo | undefined) {
        this['smn_config'] = smnConfig;
    }
    public get smnConfig() {
        return this['smn_config'];
    }
    public withSourceCdn(sourceCdn: SourceCdnResp): TaskGroupResp {
        this['source_cdn'] = sourceCdn;
        return this;
    }
    public set sourceCdn(sourceCdn: SourceCdnResp | undefined) {
        this['source_cdn'] = sourceCdn;
    }
    public get sourceCdn() {
        return this['source_cdn'];
    }
    public withMigrateSince(migrateSince: number): TaskGroupResp {
        this['migrate_since'] = migrateSince;
        return this;
    }
    public set migrateSince(migrateSince: number | undefined) {
        this['migrate_since'] = migrateSince;
    }
    public get migrateSince() {
        return this['migrate_since'];
    }
    public withMigrateSpeed(migrateSpeed: number): TaskGroupResp {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed() {
        return this['migrate_speed'];
    }
    public withTotalTime(totalTime: number): TaskGroupResp {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime() {
        return this['total_time'];
    }
    public withStartTime(startTime: number): TaskGroupResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withTotalTaskNum(totalTaskNum: number): TaskGroupResp {
        this['total_task_num'] = totalTaskNum;
        return this;
    }
    public set totalTaskNum(totalTaskNum: number | undefined) {
        this['total_task_num'] = totalTaskNum;
    }
    public get totalTaskNum() {
        return this['total_task_num'];
    }
    public withCreateTaskNum(createTaskNum: number): TaskGroupResp {
        this['create_task_num'] = createTaskNum;
        return this;
    }
    public set createTaskNum(createTaskNum: number | undefined) {
        this['create_task_num'] = createTaskNum;
    }
    public get createTaskNum() {
        return this['create_task_num'];
    }
    public withFailedTaskNum(failedTaskNum: number): TaskGroupResp {
        this['failed_task_num'] = failedTaskNum;
        return this;
    }
    public set failedTaskNum(failedTaskNum: number | undefined) {
        this['failed_task_num'] = failedTaskNum;
    }
    public get failedTaskNum() {
        return this['failed_task_num'];
    }
    public withCompleteTaskNum(completeTaskNum: number): TaskGroupResp {
        this['complete_task_num'] = completeTaskNum;
        return this;
    }
    public set completeTaskNum(completeTaskNum: number | undefined) {
        this['complete_task_num'] = completeTaskNum;
    }
    public get completeTaskNum() {
        return this['complete_task_num'];
    }
    public withPausedTaskNum(pausedTaskNum: number): TaskGroupResp {
        this['paused_task_num'] = pausedTaskNum;
        return this;
    }
    public set pausedTaskNum(pausedTaskNum: number | undefined) {
        this['paused_task_num'] = pausedTaskNum;
    }
    public get pausedTaskNum() {
        return this['paused_task_num'];
    }
    public withExecutingTaskNum(executingTaskNum: number): TaskGroupResp {
        this['executing_task_num'] = executingTaskNum;
        return this;
    }
    public set executingTaskNum(executingTaskNum: number | undefined) {
        this['executing_task_num'] = executingTaskNum;
    }
    public get executingTaskNum() {
        return this['executing_task_num'];
    }
    public withWaitingTaskNum(waitingTaskNum: number): TaskGroupResp {
        this['waiting_task_num'] = waitingTaskNum;
        return this;
    }
    public set waitingTaskNum(waitingTaskNum: number | undefined) {
        this['waiting_task_num'] = waitingTaskNum;
    }
    public get waitingTaskNum() {
        return this['waiting_task_num'];
    }
    public withTotalNum(totalNum: number): TaskGroupResp {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum() {
        return this['total_num'];
    }
    public withCreateCompleteNum(createCompleteNum: number): TaskGroupResp {
        this['create_complete_num'] = createCompleteNum;
        return this;
    }
    public set createCompleteNum(createCompleteNum: number | undefined) {
        this['create_complete_num'] = createCompleteNum;
    }
    public get createCompleteNum() {
        return this['create_complete_num'];
    }
    public withSuccessNum(successNum: number): TaskGroupResp {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum() {
        return this['success_num'];
    }
    public withFailNum(failNum: number): TaskGroupResp {
        this['fail_num'] = failNum;
        return this;
    }
    public set failNum(failNum: number | undefined) {
        this['fail_num'] = failNum;
    }
    public get failNum() {
        return this['fail_num'];
    }
    public withSkipNum(skipNum: number): TaskGroupResp {
        this['skip_num'] = skipNum;
        return this;
    }
    public set skipNum(skipNum: number | undefined) {
        this['skip_num'] = skipNum;
    }
    public get skipNum() {
        return this['skip_num'];
    }
    public withTotalSize(totalSize: number): TaskGroupResp {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize() {
        return this['total_size'];
    }
    public withCreateCompleteSize(createCompleteSize: number): TaskGroupResp {
        this['create_complete_size'] = createCompleteSize;
        return this;
    }
    public set createCompleteSize(createCompleteSize: number | undefined) {
        this['create_complete_size'] = createCompleteSize;
    }
    public get createCompleteSize() {
        return this['create_complete_size'];
    }
    public withCompleteSize(completeSize: number): TaskGroupResp {
        this['complete_size'] = completeSize;
        return this;
    }
    public set completeSize(completeSize: number | undefined) {
        this['complete_size'] = completeSize;
    }
    public get completeSize() {
        return this['complete_size'];
    }
    public withFailedObjectRecord(failedObjectRecord: FailedObjectRecordDto): TaskGroupResp {
        this['failed_object_record'] = failedObjectRecord;
        return this;
    }
    public set failedObjectRecord(failedObjectRecord: FailedObjectRecordDto | undefined) {
        this['failed_object_record'] = failedObjectRecord;
    }
    public get failedObjectRecord() {
        return this['failed_object_record'];
    }
    public withObjectOverwriteMode(objectOverwriteMode: TaskGroupRespObjectOverwriteModeEnum): TaskGroupResp {
        this['object_overwrite_mode'] = objectOverwriteMode;
        return this;
    }
    public set objectOverwriteMode(objectOverwriteMode: TaskGroupRespObjectOverwriteModeEnum | undefined) {
        this['object_overwrite_mode'] = objectOverwriteMode;
    }
    public get objectOverwriteMode() {
        return this['object_overwrite_mode'];
    }
    public withConsistencyCheck(consistencyCheck: TaskGroupRespConsistencyCheckEnum): TaskGroupResp {
        this['consistency_check'] = consistencyCheck;
        return this;
    }
    public set consistencyCheck(consistencyCheck: TaskGroupRespConsistencyCheckEnum | undefined) {
        this['consistency_check'] = consistencyCheck;
    }
    public get consistencyCheck() {
        return this['consistency_check'];
    }
    public withEnableRequesterPays(enableRequesterPays: boolean): TaskGroupResp {
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
export enum TaskGroupRespTaskTypeEnum {
    LIST = 'LIST',
    URL_LIST = 'URL_LIST',
    PREFIX = 'PREFIX'
}
/**
    * @export
    * @enum {string}
    */
export enum TaskGroupRespObjectOverwriteModeEnum {
    NO_OVERWRITE = 'NO_OVERWRITE',
    SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE = 'SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE',
    CRC64_COMPARISON_OVERWRITE = 'CRC64_COMPARISON_OVERWRITE',
    FULL_OVERWRITE = 'FULL_OVERWRITE'
}
/**
    * @export
    * @enum {string}
    */
export enum TaskGroupRespConsistencyCheckEnum {
    SIZE_LAST_MODIFIED = 'size_last_modified',
    CRC64 = 'crc64',
    NO_CHECK = 'no_check'
}

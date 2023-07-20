import { BandwidthPolicyDto } from './BandwidthPolicyDto';
import { ErrorReasonResp } from './ErrorReasonResp';
import { FailedObjectRecordDto } from './FailedObjectRecordDto';
import { SmnInfo } from './SmnInfo';
import { SourceCdnResp } from './SourceCdnResp';
import { TaskGroupDstNodeResp } from './TaskGroupDstNodeResp';
import { TaskGroupSrcNodeResp } from './TaskGroupSrcNodeResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskGroupResponse extends SdkResponse {
    private 'group_id'?: string;
    public status?: number;
    private 'error_reason'?: ErrorReasonResp;
    private 'src_node'?: TaskGroupSrcNodeResp;
    public description?: string;
    private 'dst_node'?: TaskGroupDstNodeResp;
    private 'enable_metadata_migration'?: boolean;
    private 'enable_failed_object_recording'?: boolean;
    private 'enable_restore'?: boolean;
    private 'enable_kms'?: boolean;
    private 'task_type'?: ShowTaskGroupResponseTaskTypeEnum | string;
    private 'bandwidth_policy'?: Array<BandwidthPolicyDto>;
    private 'smn_config'?: SmnInfo;
    private 'source_cdn'?: SourceCdnResp;
    private 'migrate_since'?: number;
    private 'migrate_speed'?: number;
    private 'total_time'?: number;
    private 'start_time'?: number;
    private 'total_task_num'?: number;
    private 'create_task_num'?: number;
    private 'failed_task_num'?: number;
    private 'complete_task_num'?: number;
    private 'paused_task_num'?: number;
    private 'executing_task_num'?: number;
    private 'waiting_task_num'?: number;
    private 'total_num'?: number;
    private 'create_complete_num'?: number;
    private 'success_num'?: number;
    private 'fail_num'?: number;
    private 'skip_num'?: number;
    private 'total_size'?: number;
    private 'create_complete_size'?: number;
    private 'complete_size'?: number;
    private 'failed_object_record'?: FailedObjectRecordDto;
    private 'object_overwrite_mode'?: ShowTaskGroupResponseObjectOverwriteModeEnum | string;
    private 'consistency_check'?: ShowTaskGroupResponseConsistencyCheckEnum | string;
    private 'enable_requester_pays'?: boolean;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): ShowTaskGroupResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withStatus(status: number): ShowTaskGroupResponse {
        this['status'] = status;
        return this;
    }
    public withErrorReason(errorReason: ErrorReasonResp): ShowTaskGroupResponse {
        this['error_reason'] = errorReason;
        return this;
    }
    public set errorReason(errorReason: ErrorReasonResp  | undefined) {
        this['error_reason'] = errorReason;
    }
    public get errorReason(): ErrorReasonResp | undefined {
        return this['error_reason'];
    }
    public withSrcNode(srcNode: TaskGroupSrcNodeResp): ShowTaskGroupResponse {
        this['src_node'] = srcNode;
        return this;
    }
    public set srcNode(srcNode: TaskGroupSrcNodeResp  | undefined) {
        this['src_node'] = srcNode;
    }
    public get srcNode(): TaskGroupSrcNodeResp | undefined {
        return this['src_node'];
    }
    public withDescription(description: string): ShowTaskGroupResponse {
        this['description'] = description;
        return this;
    }
    public withDstNode(dstNode: TaskGroupDstNodeResp): ShowTaskGroupResponse {
        this['dst_node'] = dstNode;
        return this;
    }
    public set dstNode(dstNode: TaskGroupDstNodeResp  | undefined) {
        this['dst_node'] = dstNode;
    }
    public get dstNode(): TaskGroupDstNodeResp | undefined {
        return this['dst_node'];
    }
    public withEnableMetadataMigration(enableMetadataMigration: boolean): ShowTaskGroupResponse {
        this['enable_metadata_migration'] = enableMetadataMigration;
        return this;
    }
    public set enableMetadataMigration(enableMetadataMigration: boolean  | undefined) {
        this['enable_metadata_migration'] = enableMetadataMigration;
    }
    public get enableMetadataMigration(): boolean | undefined {
        return this['enable_metadata_migration'];
    }
    public withEnableFailedObjectRecording(enableFailedObjectRecording: boolean): ShowTaskGroupResponse {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
        return this;
    }
    public set enableFailedObjectRecording(enableFailedObjectRecording: boolean  | undefined) {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
    }
    public get enableFailedObjectRecording(): boolean | undefined {
        return this['enable_failed_object_recording'];
    }
    public withEnableRestore(enableRestore: boolean): ShowTaskGroupResponse {
        this['enable_restore'] = enableRestore;
        return this;
    }
    public set enableRestore(enableRestore: boolean  | undefined) {
        this['enable_restore'] = enableRestore;
    }
    public get enableRestore(): boolean | undefined {
        return this['enable_restore'];
    }
    public withEnableKms(enableKms: boolean): ShowTaskGroupResponse {
        this['enable_kms'] = enableKms;
        return this;
    }
    public set enableKms(enableKms: boolean  | undefined) {
        this['enable_kms'] = enableKms;
    }
    public get enableKms(): boolean | undefined {
        return this['enable_kms'];
    }
    public withTaskType(taskType: ShowTaskGroupResponseTaskTypeEnum | string): ShowTaskGroupResponse {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ShowTaskGroupResponseTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ShowTaskGroupResponseTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withBandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>): ShowTaskGroupResponse {
        this['bandwidth_policy'] = bandwidthPolicy;
        return this;
    }
    public set bandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>  | undefined) {
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public get bandwidthPolicy(): Array<BandwidthPolicyDto> | undefined {
        return this['bandwidth_policy'];
    }
    public withSmnConfig(smnConfig: SmnInfo): ShowTaskGroupResponse {
        this['smn_config'] = smnConfig;
        return this;
    }
    public set smnConfig(smnConfig: SmnInfo  | undefined) {
        this['smn_config'] = smnConfig;
    }
    public get smnConfig(): SmnInfo | undefined {
        return this['smn_config'];
    }
    public withSourceCdn(sourceCdn: SourceCdnResp): ShowTaskGroupResponse {
        this['source_cdn'] = sourceCdn;
        return this;
    }
    public set sourceCdn(sourceCdn: SourceCdnResp  | undefined) {
        this['source_cdn'] = sourceCdn;
    }
    public get sourceCdn(): SourceCdnResp | undefined {
        return this['source_cdn'];
    }
    public withMigrateSince(migrateSince: number): ShowTaskGroupResponse {
        this['migrate_since'] = migrateSince;
        return this;
    }
    public set migrateSince(migrateSince: number  | undefined) {
        this['migrate_since'] = migrateSince;
    }
    public get migrateSince(): number | undefined {
        return this['migrate_since'];
    }
    public withMigrateSpeed(migrateSpeed: number): ShowTaskGroupResponse {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number  | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed(): number | undefined {
        return this['migrate_speed'];
    }
    public withTotalTime(totalTime: number): ShowTaskGroupResponse {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number  | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime(): number | undefined {
        return this['total_time'];
    }
    public withStartTime(startTime: number): ShowTaskGroupResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTotalTaskNum(totalTaskNum: number): ShowTaskGroupResponse {
        this['total_task_num'] = totalTaskNum;
        return this;
    }
    public set totalTaskNum(totalTaskNum: number  | undefined) {
        this['total_task_num'] = totalTaskNum;
    }
    public get totalTaskNum(): number | undefined {
        return this['total_task_num'];
    }
    public withCreateTaskNum(createTaskNum: number): ShowTaskGroupResponse {
        this['create_task_num'] = createTaskNum;
        return this;
    }
    public set createTaskNum(createTaskNum: number  | undefined) {
        this['create_task_num'] = createTaskNum;
    }
    public get createTaskNum(): number | undefined {
        return this['create_task_num'];
    }
    public withFailedTaskNum(failedTaskNum: number): ShowTaskGroupResponse {
        this['failed_task_num'] = failedTaskNum;
        return this;
    }
    public set failedTaskNum(failedTaskNum: number  | undefined) {
        this['failed_task_num'] = failedTaskNum;
    }
    public get failedTaskNum(): number | undefined {
        return this['failed_task_num'];
    }
    public withCompleteTaskNum(completeTaskNum: number): ShowTaskGroupResponse {
        this['complete_task_num'] = completeTaskNum;
        return this;
    }
    public set completeTaskNum(completeTaskNum: number  | undefined) {
        this['complete_task_num'] = completeTaskNum;
    }
    public get completeTaskNum(): number | undefined {
        return this['complete_task_num'];
    }
    public withPausedTaskNum(pausedTaskNum: number): ShowTaskGroupResponse {
        this['paused_task_num'] = pausedTaskNum;
        return this;
    }
    public set pausedTaskNum(pausedTaskNum: number  | undefined) {
        this['paused_task_num'] = pausedTaskNum;
    }
    public get pausedTaskNum(): number | undefined {
        return this['paused_task_num'];
    }
    public withExecutingTaskNum(executingTaskNum: number): ShowTaskGroupResponse {
        this['executing_task_num'] = executingTaskNum;
        return this;
    }
    public set executingTaskNum(executingTaskNum: number  | undefined) {
        this['executing_task_num'] = executingTaskNum;
    }
    public get executingTaskNum(): number | undefined {
        return this['executing_task_num'];
    }
    public withWaitingTaskNum(waitingTaskNum: number): ShowTaskGroupResponse {
        this['waiting_task_num'] = waitingTaskNum;
        return this;
    }
    public set waitingTaskNum(waitingTaskNum: number  | undefined) {
        this['waiting_task_num'] = waitingTaskNum;
    }
    public get waitingTaskNum(): number | undefined {
        return this['waiting_task_num'];
    }
    public withTotalNum(totalNum: number): ShowTaskGroupResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withCreateCompleteNum(createCompleteNum: number): ShowTaskGroupResponse {
        this['create_complete_num'] = createCompleteNum;
        return this;
    }
    public set createCompleteNum(createCompleteNum: number  | undefined) {
        this['create_complete_num'] = createCompleteNum;
    }
    public get createCompleteNum(): number | undefined {
        return this['create_complete_num'];
    }
    public withSuccessNum(successNum: number): ShowTaskGroupResponse {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withFailNum(failNum: number): ShowTaskGroupResponse {
        this['fail_num'] = failNum;
        return this;
    }
    public set failNum(failNum: number  | undefined) {
        this['fail_num'] = failNum;
    }
    public get failNum(): number | undefined {
        return this['fail_num'];
    }
    public withSkipNum(skipNum: number): ShowTaskGroupResponse {
        this['skip_num'] = skipNum;
        return this;
    }
    public set skipNum(skipNum: number  | undefined) {
        this['skip_num'] = skipNum;
    }
    public get skipNum(): number | undefined {
        return this['skip_num'];
    }
    public withTotalSize(totalSize: number): ShowTaskGroupResponse {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['total_size'];
    }
    public withCreateCompleteSize(createCompleteSize: number): ShowTaskGroupResponse {
        this['create_complete_size'] = createCompleteSize;
        return this;
    }
    public set createCompleteSize(createCompleteSize: number  | undefined) {
        this['create_complete_size'] = createCompleteSize;
    }
    public get createCompleteSize(): number | undefined {
        return this['create_complete_size'];
    }
    public withCompleteSize(completeSize: number): ShowTaskGroupResponse {
        this['complete_size'] = completeSize;
        return this;
    }
    public set completeSize(completeSize: number  | undefined) {
        this['complete_size'] = completeSize;
    }
    public get completeSize(): number | undefined {
        return this['complete_size'];
    }
    public withFailedObjectRecord(failedObjectRecord: FailedObjectRecordDto): ShowTaskGroupResponse {
        this['failed_object_record'] = failedObjectRecord;
        return this;
    }
    public set failedObjectRecord(failedObjectRecord: FailedObjectRecordDto  | undefined) {
        this['failed_object_record'] = failedObjectRecord;
    }
    public get failedObjectRecord(): FailedObjectRecordDto | undefined {
        return this['failed_object_record'];
    }
    public withObjectOverwriteMode(objectOverwriteMode: ShowTaskGroupResponseObjectOverwriteModeEnum | string): ShowTaskGroupResponse {
        this['object_overwrite_mode'] = objectOverwriteMode;
        return this;
    }
    public set objectOverwriteMode(objectOverwriteMode: ShowTaskGroupResponseObjectOverwriteModeEnum | string  | undefined) {
        this['object_overwrite_mode'] = objectOverwriteMode;
    }
    public get objectOverwriteMode(): ShowTaskGroupResponseObjectOverwriteModeEnum | string | undefined {
        return this['object_overwrite_mode'];
    }
    public withConsistencyCheck(consistencyCheck: ShowTaskGroupResponseConsistencyCheckEnum | string): ShowTaskGroupResponse {
        this['consistency_check'] = consistencyCheck;
        return this;
    }
    public set consistencyCheck(consistencyCheck: ShowTaskGroupResponseConsistencyCheckEnum | string  | undefined) {
        this['consistency_check'] = consistencyCheck;
    }
    public get consistencyCheck(): ShowTaskGroupResponseConsistencyCheckEnum | string | undefined {
        return this['consistency_check'];
    }
    public withEnableRequesterPays(enableRequesterPays: boolean): ShowTaskGroupResponse {
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
export enum ShowTaskGroupResponseTaskTypeEnum {
    LIST = 'LIST',
    URL_LIST = 'URL_LIST',
    PREFIX = 'PREFIX'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTaskGroupResponseObjectOverwriteModeEnum {
    NO_OVERWRITE = 'NO_OVERWRITE',
    SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE = 'SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE',
    CRC64_COMPARISON_OVERWRITE = 'CRC64_COMPARISON_OVERWRITE',
    FULL_OVERWRITE = 'FULL_OVERWRITE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTaskGroupResponseConsistencyCheckEnum {
    SIZE_LAST_MODIFIED = 'size_last_modified',
    CRC64 = 'crc64',
    NO_CHECK = 'no_check'
}

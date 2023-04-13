import { BandwidthPolicyDto } from './BandwidthPolicyDto';
import { DstNodeResp } from './DstNodeResp';
import { ErrorReasonResp } from './ErrorReasonResp';
import { FailedObjectRecordDto } from './FailedObjectRecordDto';
import { SmnInfo } from './SmnInfo';
import { SourceCdnResp } from './SourceCdnResp';
import { SrcNodeResp } from './SrcNodeResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskResponse extends SdkResponse {
    private 'bandwidth_policy'?: Array<BandwidthPolicyDto> | undefined;
    private 'complete_size'?: number | undefined;
    public description?: string;
    private 'dst_node'?: DstNodeResp | undefined;
    private 'enable_failed_object_recording'?: boolean | undefined;
    private 'enable_kms'?: boolean | undefined;
    private 'enable_metadata_migration'?: boolean | undefined;
    private 'enable_restore'?: boolean | undefined;
    private 'error_reason'?: ErrorReasonResp | undefined;
    private 'failed_num'?: number | undefined;
    private 'failed_object_record'?: FailedObjectRecordDto | undefined;
    private 'group_id'?: string | undefined;
    public id?: number;
    private 'is_query_over'?: boolean | undefined;
    private 'left_time'?: number | undefined;
    private 'migrate_since'?: number | undefined;
    private 'migrate_speed'?: number | undefined;
    public name?: string;
    public progress?: number;
    private 'real_size'?: number | undefined;
    private 'skipped_num'?: number | undefined;
    private 'src_node'?: SrcNodeResp | undefined;
    private 'start_time'?: number | undefined;
    public status?: number;
    private 'successful_num'?: number | undefined;
    private 'task_type'?: ShowTaskResponseTaskTypeEnum | undefined;
    private 'group_type'?: ShowTaskResponseGroupTypeEnum | undefined;
    private 'total_num'?: number | undefined;
    private 'total_size'?: number | undefined;
    private 'total_time'?: number | undefined;
    private 'smn_info'?: SmnInfo | undefined;
    private 'source_cdn'?: SourceCdnResp | undefined;
    private 'success_record_error_reason'?: string | undefined;
    private 'skip_record_error_reason'?: string | undefined;
    private 'object_overwrite_mode'?: ShowTaskResponseObjectOverwriteModeEnum | undefined;
    private 'consistency_check'?: ShowTaskResponseConsistencyCheckEnum | undefined;
    private 'enable_requester_pays'?: boolean | undefined;
    public constructor() { 
        super();
    }
    public withBandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>): ShowTaskResponse {
        this['bandwidth_policy'] = bandwidthPolicy;
        return this;
    }
    public set bandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto> | undefined) {
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public get bandwidthPolicy() {
        return this['bandwidth_policy'];
    }
    public withCompleteSize(completeSize: number): ShowTaskResponse {
        this['complete_size'] = completeSize;
        return this;
    }
    public set completeSize(completeSize: number | undefined) {
        this['complete_size'] = completeSize;
    }
    public get completeSize() {
        return this['complete_size'];
    }
    public withDescription(description: string): ShowTaskResponse {
        this['description'] = description;
        return this;
    }
    public withDstNode(dstNode: DstNodeResp): ShowTaskResponse {
        this['dst_node'] = dstNode;
        return this;
    }
    public set dstNode(dstNode: DstNodeResp | undefined) {
        this['dst_node'] = dstNode;
    }
    public get dstNode() {
        return this['dst_node'];
    }
    public withEnableFailedObjectRecording(enableFailedObjectRecording: boolean): ShowTaskResponse {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
        return this;
    }
    public set enableFailedObjectRecording(enableFailedObjectRecording: boolean | undefined) {
        this['enable_failed_object_recording'] = enableFailedObjectRecording;
    }
    public get enableFailedObjectRecording() {
        return this['enable_failed_object_recording'];
    }
    public withEnableKms(enableKms: boolean): ShowTaskResponse {
        this['enable_kms'] = enableKms;
        return this;
    }
    public set enableKms(enableKms: boolean | undefined) {
        this['enable_kms'] = enableKms;
    }
    public get enableKms() {
        return this['enable_kms'];
    }
    public withEnableMetadataMigration(enableMetadataMigration: boolean): ShowTaskResponse {
        this['enable_metadata_migration'] = enableMetadataMigration;
        return this;
    }
    public set enableMetadataMigration(enableMetadataMigration: boolean | undefined) {
        this['enable_metadata_migration'] = enableMetadataMigration;
    }
    public get enableMetadataMigration() {
        return this['enable_metadata_migration'];
    }
    public withEnableRestore(enableRestore: boolean): ShowTaskResponse {
        this['enable_restore'] = enableRestore;
        return this;
    }
    public set enableRestore(enableRestore: boolean | undefined) {
        this['enable_restore'] = enableRestore;
    }
    public get enableRestore() {
        return this['enable_restore'];
    }
    public withErrorReason(errorReason: ErrorReasonResp): ShowTaskResponse {
        this['error_reason'] = errorReason;
        return this;
    }
    public set errorReason(errorReason: ErrorReasonResp | undefined) {
        this['error_reason'] = errorReason;
    }
    public get errorReason() {
        return this['error_reason'];
    }
    public withFailedNum(failedNum: number): ShowTaskResponse {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum() {
        return this['failed_num'];
    }
    public withFailedObjectRecord(failedObjectRecord: FailedObjectRecordDto): ShowTaskResponse {
        this['failed_object_record'] = failedObjectRecord;
        return this;
    }
    public set failedObjectRecord(failedObjectRecord: FailedObjectRecordDto | undefined) {
        this['failed_object_record'] = failedObjectRecord;
    }
    public get failedObjectRecord() {
        return this['failed_object_record'];
    }
    public withGroupId(groupId: string): ShowTaskResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withId(id: number): ShowTaskResponse {
        this['id'] = id;
        return this;
    }
    public withIsQueryOver(isQueryOver: boolean): ShowTaskResponse {
        this['is_query_over'] = isQueryOver;
        return this;
    }
    public set isQueryOver(isQueryOver: boolean | undefined) {
        this['is_query_over'] = isQueryOver;
    }
    public get isQueryOver() {
        return this['is_query_over'];
    }
    public withLeftTime(leftTime: number): ShowTaskResponse {
        this['left_time'] = leftTime;
        return this;
    }
    public set leftTime(leftTime: number | undefined) {
        this['left_time'] = leftTime;
    }
    public get leftTime() {
        return this['left_time'];
    }
    public withMigrateSince(migrateSince: number): ShowTaskResponse {
        this['migrate_since'] = migrateSince;
        return this;
    }
    public set migrateSince(migrateSince: number | undefined) {
        this['migrate_since'] = migrateSince;
    }
    public get migrateSince() {
        return this['migrate_since'];
    }
    public withMigrateSpeed(migrateSpeed: number): ShowTaskResponse {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed() {
        return this['migrate_speed'];
    }
    public withName(name: string): ShowTaskResponse {
        this['name'] = name;
        return this;
    }
    public withProgress(progress: number): ShowTaskResponse {
        this['progress'] = progress;
        return this;
    }
    public withRealSize(realSize: number): ShowTaskResponse {
        this['real_size'] = realSize;
        return this;
    }
    public set realSize(realSize: number | undefined) {
        this['real_size'] = realSize;
    }
    public get realSize() {
        return this['real_size'];
    }
    public withSkippedNum(skippedNum: number): ShowTaskResponse {
        this['skipped_num'] = skippedNum;
        return this;
    }
    public set skippedNum(skippedNum: number | undefined) {
        this['skipped_num'] = skippedNum;
    }
    public get skippedNum() {
        return this['skipped_num'];
    }
    public withSrcNode(srcNode: SrcNodeResp): ShowTaskResponse {
        this['src_node'] = srcNode;
        return this;
    }
    public set srcNode(srcNode: SrcNodeResp | undefined) {
        this['src_node'] = srcNode;
    }
    public get srcNode() {
        return this['src_node'];
    }
    public withStartTime(startTime: number): ShowTaskResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withStatus(status: number): ShowTaskResponse {
        this['status'] = status;
        return this;
    }
    public withSuccessfulNum(successfulNum: number): ShowTaskResponse {
        this['successful_num'] = successfulNum;
        return this;
    }
    public set successfulNum(successfulNum: number | undefined) {
        this['successful_num'] = successfulNum;
    }
    public get successfulNum() {
        return this['successful_num'];
    }
    public withTaskType(taskType: ShowTaskResponseTaskTypeEnum): ShowTaskResponse {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ShowTaskResponseTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withGroupType(groupType: ShowTaskResponseGroupTypeEnum): ShowTaskResponse {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: ShowTaskResponseGroupTypeEnum | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType() {
        return this['group_type'];
    }
    public withTotalNum(totalNum: number): ShowTaskResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum() {
        return this['total_num'];
    }
    public withTotalSize(totalSize: number): ShowTaskResponse {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize() {
        return this['total_size'];
    }
    public withTotalTime(totalTime: number): ShowTaskResponse {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime() {
        return this['total_time'];
    }
    public withSmnInfo(smnInfo: SmnInfo): ShowTaskResponse {
        this['smn_info'] = smnInfo;
        return this;
    }
    public set smnInfo(smnInfo: SmnInfo | undefined) {
        this['smn_info'] = smnInfo;
    }
    public get smnInfo() {
        return this['smn_info'];
    }
    public withSourceCdn(sourceCdn: SourceCdnResp): ShowTaskResponse {
        this['source_cdn'] = sourceCdn;
        return this;
    }
    public set sourceCdn(sourceCdn: SourceCdnResp | undefined) {
        this['source_cdn'] = sourceCdn;
    }
    public get sourceCdn() {
        return this['source_cdn'];
    }
    public withSuccessRecordErrorReason(successRecordErrorReason: string): ShowTaskResponse {
        this['success_record_error_reason'] = successRecordErrorReason;
        return this;
    }
    public set successRecordErrorReason(successRecordErrorReason: string | undefined) {
        this['success_record_error_reason'] = successRecordErrorReason;
    }
    public get successRecordErrorReason() {
        return this['success_record_error_reason'];
    }
    public withSkipRecordErrorReason(skipRecordErrorReason: string): ShowTaskResponse {
        this['skip_record_error_reason'] = skipRecordErrorReason;
        return this;
    }
    public set skipRecordErrorReason(skipRecordErrorReason: string | undefined) {
        this['skip_record_error_reason'] = skipRecordErrorReason;
    }
    public get skipRecordErrorReason() {
        return this['skip_record_error_reason'];
    }
    public withObjectOverwriteMode(objectOverwriteMode: ShowTaskResponseObjectOverwriteModeEnum): ShowTaskResponse {
        this['object_overwrite_mode'] = objectOverwriteMode;
        return this;
    }
    public set objectOverwriteMode(objectOverwriteMode: ShowTaskResponseObjectOverwriteModeEnum | undefined) {
        this['object_overwrite_mode'] = objectOverwriteMode;
    }
    public get objectOverwriteMode() {
        return this['object_overwrite_mode'];
    }
    public withConsistencyCheck(consistencyCheck: ShowTaskResponseConsistencyCheckEnum): ShowTaskResponse {
        this['consistency_check'] = consistencyCheck;
        return this;
    }
    public set consistencyCheck(consistencyCheck: ShowTaskResponseConsistencyCheckEnum | undefined) {
        this['consistency_check'] = consistencyCheck;
    }
    public get consistencyCheck() {
        return this['consistency_check'];
    }
    public withEnableRequesterPays(enableRequesterPays: boolean): ShowTaskResponse {
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
export enum ShowTaskResponseTaskTypeEnum {
    LIST = 'list',
    OBJECT = 'object',
    PREFIX = 'prefix',
    URL_LIST = 'url_list'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTaskResponseGroupTypeEnum {
    NORMAL_TASK = 'NORMAL_TASK',
    SYNC_TASK = 'SYNC_TASK',
    GROUP_TASK = 'GROUP_TASK'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTaskResponseObjectOverwriteModeEnum {
    NO_OVERWRITE = 'NO_OVERWRITE',
    SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE = 'SIZE_LAST_MODIFIED_COMPARISON_OVERWRITE',
    CRC64_COMPARISON_OVERWRITE = 'CRC64_COMPARISON_OVERWRITE',
    FULL_OVERWRITE = 'FULL_OVERWRITE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTaskResponseConsistencyCheckEnum {
    SIZE_LAST_MODIFIED = 'size_last_modified',
    CRC64 = 'crc64',
    NO_CHECK = 'no_check'
}

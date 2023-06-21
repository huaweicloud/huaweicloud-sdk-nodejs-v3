import { RecordParam } from './RecordParam';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateIndividualStreamJobResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    private 'stream_name'?: string | undefined;
    private 'app_id'?: string | undefined;
    private 'room_id'?: string | undefined;
    private 'user_id'?: string | undefined;
    private 'is_record_audio'?: boolean | undefined;
    private 'video_type'?: UpdateIndividualStreamJobResponseVideoTypeEnum | undefined;
    private 'select_stream_type'?: UpdateIndividualStreamJobResponseSelectStreamTypeEnum | undefined;
    private 'max_idle_time'?: number | undefined;
    private 'record_param'?: RecordParam | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public state?: UpdateIndividualStreamJobResponseStateEnum;
    private 'stop_reason'?: UpdateIndividualStreamJobResponseStopReasonEnum | undefined;
    public description?: string;
    private 'start_time'?: string | undefined;
    private 'stop_time'?: string | undefined;
    private 'X-request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpdateIndividualStreamJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withStreamName(streamName: string): UpdateIndividualStreamJobResponse {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName() {
        return this['stream_name'];
    }
    public withAppId(appId: string): UpdateIndividualStreamJobResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withRoomId(roomId: string): UpdateIndividualStreamJobResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withUserId(userId: string): UpdateIndividualStreamJobResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withIsRecordAudio(isRecordAudio: boolean): UpdateIndividualStreamJobResponse {
        this['is_record_audio'] = isRecordAudio;
        return this;
    }
    public set isRecordAudio(isRecordAudio: boolean | undefined) {
        this['is_record_audio'] = isRecordAudio;
    }
    public get isRecordAudio() {
        return this['is_record_audio'];
    }
    public withVideoType(videoType: UpdateIndividualStreamJobResponseVideoTypeEnum): UpdateIndividualStreamJobResponse {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: UpdateIndividualStreamJobResponseVideoTypeEnum | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType() {
        return this['video_type'];
    }
    public withSelectStreamType(selectStreamType: UpdateIndividualStreamJobResponseSelectStreamTypeEnum): UpdateIndividualStreamJobResponse {
        this['select_stream_type'] = selectStreamType;
        return this;
    }
    public set selectStreamType(selectStreamType: UpdateIndividualStreamJobResponseSelectStreamTypeEnum | undefined) {
        this['select_stream_type'] = selectStreamType;
    }
    public get selectStreamType() {
        return this['select_stream_type'];
    }
    public withMaxIdleTime(maxIdleTime: number): UpdateIndividualStreamJobResponse {
        this['max_idle_time'] = maxIdleTime;
        return this;
    }
    public set maxIdleTime(maxIdleTime: number | undefined) {
        this['max_idle_time'] = maxIdleTime;
    }
    public get maxIdleTime() {
        return this['max_idle_time'];
    }
    public withRecordParam(recordParam: RecordParam): UpdateIndividualStreamJobResponse {
        this['record_param'] = recordParam;
        return this;
    }
    public set recordParam(recordParam: RecordParam | undefined) {
        this['record_param'] = recordParam;
    }
    public get recordParam() {
        return this['record_param'];
    }
    public withCreateTime(createTime: string): UpdateIndividualStreamJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateIndividualStreamJobResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withState(state: UpdateIndividualStreamJobResponseStateEnum): UpdateIndividualStreamJobResponse {
        this['state'] = state;
        return this;
    }
    public withStopReason(stopReason: UpdateIndividualStreamJobResponseStopReasonEnum): UpdateIndividualStreamJobResponse {
        this['stop_reason'] = stopReason;
        return this;
    }
    public set stopReason(stopReason: UpdateIndividualStreamJobResponseStopReasonEnum | undefined) {
        this['stop_reason'] = stopReason;
    }
    public get stopReason() {
        return this['stop_reason'];
    }
    public withDescription(description: string): UpdateIndividualStreamJobResponse {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): UpdateIndividualStreamJobResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withStopTime(stopTime: string): UpdateIndividualStreamJobResponse {
        this['stop_time'] = stopTime;
        return this;
    }
    public set stopTime(stopTime: string | undefined) {
        this['stop_time'] = stopTime;
    }
    public get stopTime() {
        return this['stop_time'];
    }
    public withXRequestId(xRequestId: string): UpdateIndividualStreamJobResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateIndividualStreamJobResponseVideoTypeEnum {
    CAMERASTREAM = 'CAMERASTREAM',
    SCREENSTREAM = 'SCREENSTREAM',
    Empty = ''
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateIndividualStreamJobResponseSelectStreamTypeEnum {
    LD = 'LD',
    SD = 'SD',
    HD = 'HD',
    FHD = 'FHD'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateIndividualStreamJobResponseStateEnum {
    INIT = 'INIT',
    RUNNING = 'RUNNING',
    STOPPED = 'STOPPED'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateIndividualStreamJobResponseStopReasonEnum {
    TENANT_STOP = 'TENANT_STOP',
    EXCEED_MAX_IDLE_TIME = 'EXCEED_MAX_IDLE_TIME',
    INTERNAL_ERROR = 'INTERNAL_ERROR'
}

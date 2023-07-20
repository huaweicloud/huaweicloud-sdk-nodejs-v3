import { RecordParam } from './RecordParam';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIndividualStreamJobResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'stream_name'?: string;
    private 'app_id'?: string;
    private 'room_id'?: string;
    private 'user_id'?: string;
    private 'is_record_audio'?: boolean;
    private 'video_type'?: ShowIndividualStreamJobResponseVideoTypeEnum | string;
    private 'select_stream_type'?: ShowIndividualStreamJobResponseSelectStreamTypeEnum | string;
    private 'max_idle_time'?: number;
    private 'record_param'?: RecordParam;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public state?: ShowIndividualStreamJobResponseStateEnum | string;
    private 'stop_reason'?: ShowIndividualStreamJobResponseStopReasonEnum | string;
    public description?: string;
    private 'start_time'?: string;
    private 'stop_time'?: string;
    private 'X-request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowIndividualStreamJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStreamName(streamName: string): ShowIndividualStreamJobResponse {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withAppId(appId: string): ShowIndividualStreamJobResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withRoomId(roomId: string): ShowIndividualStreamJobResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withUserId(userId: string): ShowIndividualStreamJobResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withIsRecordAudio(isRecordAudio: boolean): ShowIndividualStreamJobResponse {
        this['is_record_audio'] = isRecordAudio;
        return this;
    }
    public set isRecordAudio(isRecordAudio: boolean  | undefined) {
        this['is_record_audio'] = isRecordAudio;
    }
    public get isRecordAudio(): boolean | undefined {
        return this['is_record_audio'];
    }
    public withVideoType(videoType: ShowIndividualStreamJobResponseVideoTypeEnum | string): ShowIndividualStreamJobResponse {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: ShowIndividualStreamJobResponseVideoTypeEnum | string  | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType(): ShowIndividualStreamJobResponseVideoTypeEnum | string | undefined {
        return this['video_type'];
    }
    public withSelectStreamType(selectStreamType: ShowIndividualStreamJobResponseSelectStreamTypeEnum | string): ShowIndividualStreamJobResponse {
        this['select_stream_type'] = selectStreamType;
        return this;
    }
    public set selectStreamType(selectStreamType: ShowIndividualStreamJobResponseSelectStreamTypeEnum | string  | undefined) {
        this['select_stream_type'] = selectStreamType;
    }
    public get selectStreamType(): ShowIndividualStreamJobResponseSelectStreamTypeEnum | string | undefined {
        return this['select_stream_type'];
    }
    public withMaxIdleTime(maxIdleTime: number): ShowIndividualStreamJobResponse {
        this['max_idle_time'] = maxIdleTime;
        return this;
    }
    public set maxIdleTime(maxIdleTime: number  | undefined) {
        this['max_idle_time'] = maxIdleTime;
    }
    public get maxIdleTime(): number | undefined {
        return this['max_idle_time'];
    }
    public withRecordParam(recordParam: RecordParam): ShowIndividualStreamJobResponse {
        this['record_param'] = recordParam;
        return this;
    }
    public set recordParam(recordParam: RecordParam  | undefined) {
        this['record_param'] = recordParam;
    }
    public get recordParam(): RecordParam | undefined {
        return this['record_param'];
    }
    public withCreateTime(createTime: string): ShowIndividualStreamJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowIndividualStreamJobResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withState(state: ShowIndividualStreamJobResponseStateEnum | string): ShowIndividualStreamJobResponse {
        this['state'] = state;
        return this;
    }
    public withStopReason(stopReason: ShowIndividualStreamJobResponseStopReasonEnum | string): ShowIndividualStreamJobResponse {
        this['stop_reason'] = stopReason;
        return this;
    }
    public set stopReason(stopReason: ShowIndividualStreamJobResponseStopReasonEnum | string  | undefined) {
        this['stop_reason'] = stopReason;
    }
    public get stopReason(): ShowIndividualStreamJobResponseStopReasonEnum | string | undefined {
        return this['stop_reason'];
    }
    public withDescription(description: string): ShowIndividualStreamJobResponse {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): ShowIndividualStreamJobResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStopTime(stopTime: string): ShowIndividualStreamJobResponse {
        this['stop_time'] = stopTime;
        return this;
    }
    public set stopTime(stopTime: string  | undefined) {
        this['stop_time'] = stopTime;
    }
    public get stopTime(): string | undefined {
        return this['stop_time'];
    }
    public withXRequestId(xRequestId: string): ShowIndividualStreamJobResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowIndividualStreamJobResponseVideoTypeEnum {
    CAMERASTREAM = 'CAMERASTREAM',
    SCREENSTREAM = 'SCREENSTREAM',
    Empty = ''
}
/**
    * @export
    * @enum {string}
    */
export enum ShowIndividualStreamJobResponseSelectStreamTypeEnum {
    LD = 'LD',
    SD = 'SD',
    HD = 'HD',
    FHD = 'FHD'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowIndividualStreamJobResponseStateEnum {
    INIT = 'INIT',
    RUNNING = 'RUNNING',
    STOPPED = 'STOPPED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowIndividualStreamJobResponseStopReasonEnum {
    TENANT_STOP = 'TENANT_STOP',
    EXCEED_MAX_IDLE_TIME = 'EXCEED_MAX_IDLE_TIME',
    INTERNAL_ERROR = 'INTERNAL_ERROR'
}

import { ChatSubtitleConfig } from './ChatSubtitleConfig';
import { ChatVideoConfigRsp } from './ChatVideoConfigRsp';
import { ErrorResponse } from './ErrorResponse';
import { RTCRoomInfoList } from './RTCRoomInfoList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSmartChatJobResponse extends SdkResponse {
    private 'job_id'?: string;
    public state?: ShowSmartChatJobResponseStateEnum | string;
    public duration?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'error_info'?: ErrorResponse;
    private 'create_time'?: string;
    private 'lastupdate_time'?: string;
    private 'rtc_room_info'?: RTCRoomInfoList;
    private 'chat_subtitle_config'?: ChatSubtitleConfig;
    private 'video_config'?: ChatVideoConfigRsp;
    private 'chat_video_type'?: ShowSmartChatJobResponseChatVideoTypeEnum | string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowSmartChatJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: ShowSmartChatJobResponseStateEnum | string): ShowSmartChatJobResponse {
        this['state'] = state;
        return this;
    }
    public withDuration(duration: number): ShowSmartChatJobResponse {
        this['duration'] = duration;
        return this;
    }
    public withStartTime(startTime: string): ShowSmartChatJobResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowSmartChatJobResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): ShowSmartChatJobResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withCreateTime(createTime: string): ShowSmartChatJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastupdateTime(lastupdateTime: string): ShowSmartChatJobResponse {
        this['lastupdate_time'] = lastupdateTime;
        return this;
    }
    public set lastupdateTime(lastupdateTime: string  | undefined) {
        this['lastupdate_time'] = lastupdateTime;
    }
    public get lastupdateTime(): string | undefined {
        return this['lastupdate_time'];
    }
    public withRtcRoomInfo(rtcRoomInfo: RTCRoomInfoList): ShowSmartChatJobResponse {
        this['rtc_room_info'] = rtcRoomInfo;
        return this;
    }
    public set rtcRoomInfo(rtcRoomInfo: RTCRoomInfoList  | undefined) {
        this['rtc_room_info'] = rtcRoomInfo;
    }
    public get rtcRoomInfo(): RTCRoomInfoList | undefined {
        return this['rtc_room_info'];
    }
    public withChatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig): ShowSmartChatJobResponse {
        this['chat_subtitle_config'] = chatSubtitleConfig;
        return this;
    }
    public set chatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig  | undefined) {
        this['chat_subtitle_config'] = chatSubtitleConfig;
    }
    public get chatSubtitleConfig(): ChatSubtitleConfig | undefined {
        return this['chat_subtitle_config'];
    }
    public withVideoConfig(videoConfig: ChatVideoConfigRsp): ShowSmartChatJobResponse {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: ChatVideoConfigRsp  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): ChatVideoConfigRsp | undefined {
        return this['video_config'];
    }
    public withChatVideoType(chatVideoType: ShowSmartChatJobResponseChatVideoTypeEnum | string): ShowSmartChatJobResponse {
        this['chat_video_type'] = chatVideoType;
        return this;
    }
    public set chatVideoType(chatVideoType: ShowSmartChatJobResponseChatVideoTypeEnum | string  | undefined) {
        this['chat_video_type'] = chatVideoType;
    }
    public get chatVideoType(): ShowSmartChatJobResponseChatVideoTypeEnum | string | undefined {
        return this['chat_video_type'];
    }
    public withXRequestId(xRequestId: string): ShowSmartChatJobResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSmartChatJobResponseStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED',
    HEARTBEAT = 'HEARTBEAT'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSmartChatJobResponseChatVideoTypeEnum {
    COMPUTER = 'COMPUTER',
    MOBILE = 'MOBILE',
    HUB = 'HUB'
}

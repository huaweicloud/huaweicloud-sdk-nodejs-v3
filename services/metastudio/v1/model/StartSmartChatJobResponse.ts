import { ChatSubtitleConfig } from './ChatSubtitleConfig';
import { ChatVideoConfigRsp } from './ChatVideoConfigRsp';
import { RTCRoomInfoList } from './RTCRoomInfoList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartSmartChatJobResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'rtc_room_info'?: RTCRoomInfoList;
    private 'chat_subtitle_config'?: ChatSubtitleConfig;
    private 'video_config'?: ChatVideoConfigRsp;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): StartSmartChatJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withRtcRoomInfo(rtcRoomInfo: RTCRoomInfoList): StartSmartChatJobResponse {
        this['rtc_room_info'] = rtcRoomInfo;
        return this;
    }
    public set rtcRoomInfo(rtcRoomInfo: RTCRoomInfoList  | undefined) {
        this['rtc_room_info'] = rtcRoomInfo;
    }
    public get rtcRoomInfo(): RTCRoomInfoList | undefined {
        return this['rtc_room_info'];
    }
    public withChatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig): StartSmartChatJobResponse {
        this['chat_subtitle_config'] = chatSubtitleConfig;
        return this;
    }
    public set chatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig  | undefined) {
        this['chat_subtitle_config'] = chatSubtitleConfig;
    }
    public get chatSubtitleConfig(): ChatSubtitleConfig | undefined {
        return this['chat_subtitle_config'];
    }
    public withVideoConfig(videoConfig: ChatVideoConfigRsp): StartSmartChatJobResponse {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: ChatVideoConfigRsp  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): ChatVideoConfigRsp | undefined {
        return this['video_config'];
    }
    public withXRequestId(xRequestId: string): StartSmartChatJobResponse {
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
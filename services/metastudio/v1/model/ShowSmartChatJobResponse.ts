import { ErrorResponse } from './ErrorResponse';
import { LanguageEnum } from './LanguageEnum';
import { RTCRoomInfoList } from './RTCRoomInfoList';
import { SmartChatJobBaseInfo } from './SmartChatJobBaseInfo';
import { SmartChatSubtitleConfig } from './SmartChatSubtitleConfig';
import { SmartChatVideoConfig } from './SmartChatVideoConfig';
import { SmartChatVoiceConfig } from './SmartChatVoiceConfig';

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
    private 'chat_subtitle_config'?: SmartChatSubtitleConfig;
    private 'video_config'?: SmartChatVideoConfig;
    private 'voice_config_list'?: Array<SmartChatVoiceConfig>;
    private 'chat_video_type'?: ShowSmartChatJobResponseChatVideoTypeEnum | string;
    private 'is_transparent'?: boolean;
    private 'default_language'?: ShowSmartChatJobResponseDefaultLanguageEnum | string;
    private 'client_id'?: string;
    private 'is_pool_mode'?: boolean;
    private 'job_finish_reason'?: ShowSmartChatJobResponseJobFinishReasonEnum | string;
    private 'rtc_room_info'?: RTCRoomInfoList;
    private 'chat_state'?: number;
    public language?: LanguageEnum;
    private 'chat_access_address'?: string;
    private 'chat_access_rest_address'?: string;
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
    public withChatSubtitleConfig(chatSubtitleConfig: SmartChatSubtitleConfig): ShowSmartChatJobResponse {
        this['chat_subtitle_config'] = chatSubtitleConfig;
        return this;
    }
    public set chatSubtitleConfig(chatSubtitleConfig: SmartChatSubtitleConfig  | undefined) {
        this['chat_subtitle_config'] = chatSubtitleConfig;
    }
    public get chatSubtitleConfig(): SmartChatSubtitleConfig | undefined {
        return this['chat_subtitle_config'];
    }
    public withVideoConfig(videoConfig: SmartChatVideoConfig): ShowSmartChatJobResponse {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: SmartChatVideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): SmartChatVideoConfig | undefined {
        return this['video_config'];
    }
    public withVoiceConfigList(voiceConfigList: Array<SmartChatVoiceConfig>): ShowSmartChatJobResponse {
        this['voice_config_list'] = voiceConfigList;
        return this;
    }
    public set voiceConfigList(voiceConfigList: Array<SmartChatVoiceConfig>  | undefined) {
        this['voice_config_list'] = voiceConfigList;
    }
    public get voiceConfigList(): Array<SmartChatVoiceConfig> | undefined {
        return this['voice_config_list'];
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
    public withIsTransparent(isTransparent: boolean): ShowSmartChatJobResponse {
        this['is_transparent'] = isTransparent;
        return this;
    }
    public set isTransparent(isTransparent: boolean  | undefined) {
        this['is_transparent'] = isTransparent;
    }
    public get isTransparent(): boolean | undefined {
        return this['is_transparent'];
    }
    public withDefaultLanguage(defaultLanguage: ShowSmartChatJobResponseDefaultLanguageEnum | string): ShowSmartChatJobResponse {
        this['default_language'] = defaultLanguage;
        return this;
    }
    public set defaultLanguage(defaultLanguage: ShowSmartChatJobResponseDefaultLanguageEnum | string  | undefined) {
        this['default_language'] = defaultLanguage;
    }
    public get defaultLanguage(): ShowSmartChatJobResponseDefaultLanguageEnum | string | undefined {
        return this['default_language'];
    }
    public withClientId(clientId: string): ShowSmartChatJobResponse {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withIsPoolMode(isPoolMode: boolean): ShowSmartChatJobResponse {
        this['is_pool_mode'] = isPoolMode;
        return this;
    }
    public set isPoolMode(isPoolMode: boolean  | undefined) {
        this['is_pool_mode'] = isPoolMode;
    }
    public get isPoolMode(): boolean | undefined {
        return this['is_pool_mode'];
    }
    public withJobFinishReason(jobFinishReason: ShowSmartChatJobResponseJobFinishReasonEnum | string): ShowSmartChatJobResponse {
        this['job_finish_reason'] = jobFinishReason;
        return this;
    }
    public set jobFinishReason(jobFinishReason: ShowSmartChatJobResponseJobFinishReasonEnum | string  | undefined) {
        this['job_finish_reason'] = jobFinishReason;
    }
    public get jobFinishReason(): ShowSmartChatJobResponseJobFinishReasonEnum | string | undefined {
        return this['job_finish_reason'];
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
    public withChatState(chatState: number): ShowSmartChatJobResponse {
        this['chat_state'] = chatState;
        return this;
    }
    public set chatState(chatState: number  | undefined) {
        this['chat_state'] = chatState;
    }
    public get chatState(): number | undefined {
        return this['chat_state'];
    }
    public withLanguage(language: LanguageEnum): ShowSmartChatJobResponse {
        this['language'] = language;
        return this;
    }
    public withChatAccessAddress(chatAccessAddress: string): ShowSmartChatJobResponse {
        this['chat_access_address'] = chatAccessAddress;
        return this;
    }
    public set chatAccessAddress(chatAccessAddress: string  | undefined) {
        this['chat_access_address'] = chatAccessAddress;
    }
    public get chatAccessAddress(): string | undefined {
        return this['chat_access_address'];
    }
    public withChatAccessRestAddress(chatAccessRestAddress: string): ShowSmartChatJobResponse {
        this['chat_access_rest_address'] = chatAccessRestAddress;
        return this;
    }
    public set chatAccessRestAddress(chatAccessRestAddress: string  | undefined) {
        this['chat_access_rest_address'] = chatAccessRestAddress;
    }
    public get chatAccessRestAddress(): string | undefined {
        return this['chat_access_rest_address'];
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
    HEARTBEAT = 'HEARTBEAT',
    IDLE = 'IDLE',
    DELETING = 'DELETING'
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
/**
    * @export
    * @enum {string}
    */
export enum ShowSmartChatJobResponseDefaultLanguageEnum {
    CN = 'CN',
    EN = 'EN',
    ESP = 'ESP',
    POR = 'por',
    ARABIC = 'Arabic',
    THAI = 'Thai'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSmartChatJobResponseJobFinishReasonEnum {
    NORMAL = 'NORMAL',
    MUTE_TIMEOUT = 'MUTE_TIMEOUT'
}

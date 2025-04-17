import { LanguageEnum } from './LanguageEnum';
import { RTCRoomInfoList } from './RTCRoomInfoList';
import { SmartChatSubtitleConfig } from './SmartChatSubtitleConfig';
import { SmartChatVideoConfig } from './SmartChatVideoConfig';
import { SmartChatVoiceConfig } from './SmartChatVoiceConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartSmartChatJobResponse extends SdkResponse {
    private 'job_id'?: string;
    public language?: LanguageEnum;
    private 'rtc_room_info'?: RTCRoomInfoList;
    private 'chat_subtitle_config'?: SmartChatSubtitleConfig;
    private 'video_config'?: SmartChatVideoConfig;
    private 'voice_config_list'?: Array<SmartChatVoiceConfig>;
    private 'chat_video_type'?: StartSmartChatJobResponseChatVideoTypeEnum | string;
    public region?: string;
    private 'chat_access_address'?: string;
    private 'chat_access_rest_address'?: string;
    private 'is_transparent'?: boolean;
    private 'default_language'?: StartSmartChatJobResponseDefaultLanguageEnum | string;
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
    public withLanguage(language: LanguageEnum): StartSmartChatJobResponse {
        this['language'] = language;
        return this;
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
    public withChatSubtitleConfig(chatSubtitleConfig: SmartChatSubtitleConfig): StartSmartChatJobResponse {
        this['chat_subtitle_config'] = chatSubtitleConfig;
        return this;
    }
    public set chatSubtitleConfig(chatSubtitleConfig: SmartChatSubtitleConfig  | undefined) {
        this['chat_subtitle_config'] = chatSubtitleConfig;
    }
    public get chatSubtitleConfig(): SmartChatSubtitleConfig | undefined {
        return this['chat_subtitle_config'];
    }
    public withVideoConfig(videoConfig: SmartChatVideoConfig): StartSmartChatJobResponse {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: SmartChatVideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): SmartChatVideoConfig | undefined {
        return this['video_config'];
    }
    public withVoiceConfigList(voiceConfigList: Array<SmartChatVoiceConfig>): StartSmartChatJobResponse {
        this['voice_config_list'] = voiceConfigList;
        return this;
    }
    public set voiceConfigList(voiceConfigList: Array<SmartChatVoiceConfig>  | undefined) {
        this['voice_config_list'] = voiceConfigList;
    }
    public get voiceConfigList(): Array<SmartChatVoiceConfig> | undefined {
        return this['voice_config_list'];
    }
    public withChatVideoType(chatVideoType: StartSmartChatJobResponseChatVideoTypeEnum | string): StartSmartChatJobResponse {
        this['chat_video_type'] = chatVideoType;
        return this;
    }
    public set chatVideoType(chatVideoType: StartSmartChatJobResponseChatVideoTypeEnum | string  | undefined) {
        this['chat_video_type'] = chatVideoType;
    }
    public get chatVideoType(): StartSmartChatJobResponseChatVideoTypeEnum | string | undefined {
        return this['chat_video_type'];
    }
    public withRegion(region: string): StartSmartChatJobResponse {
        this['region'] = region;
        return this;
    }
    public withChatAccessAddress(chatAccessAddress: string): StartSmartChatJobResponse {
        this['chat_access_address'] = chatAccessAddress;
        return this;
    }
    public set chatAccessAddress(chatAccessAddress: string  | undefined) {
        this['chat_access_address'] = chatAccessAddress;
    }
    public get chatAccessAddress(): string | undefined {
        return this['chat_access_address'];
    }
    public withChatAccessRestAddress(chatAccessRestAddress: string): StartSmartChatJobResponse {
        this['chat_access_rest_address'] = chatAccessRestAddress;
        return this;
    }
    public set chatAccessRestAddress(chatAccessRestAddress: string  | undefined) {
        this['chat_access_rest_address'] = chatAccessRestAddress;
    }
    public get chatAccessRestAddress(): string | undefined {
        return this['chat_access_rest_address'];
    }
    public withIsTransparent(isTransparent: boolean): StartSmartChatJobResponse {
        this['is_transparent'] = isTransparent;
        return this;
    }
    public set isTransparent(isTransparent: boolean  | undefined) {
        this['is_transparent'] = isTransparent;
    }
    public get isTransparent(): boolean | undefined {
        return this['is_transparent'];
    }
    public withDefaultLanguage(defaultLanguage: StartSmartChatJobResponseDefaultLanguageEnum | string): StartSmartChatJobResponse {
        this['default_language'] = defaultLanguage;
        return this;
    }
    public set defaultLanguage(defaultLanguage: StartSmartChatJobResponseDefaultLanguageEnum | string  | undefined) {
        this['default_language'] = defaultLanguage;
    }
    public get defaultLanguage(): StartSmartChatJobResponseDefaultLanguageEnum | string | undefined {
        return this['default_language'];
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

/**
    * @export
    * @enum {string}
    */
export enum StartSmartChatJobResponseChatVideoTypeEnum {
    COMPUTER = 'COMPUTER',
    MOBILE = 'MOBILE',
    HUB = 'HUB'
}
/**
    * @export
    * @enum {string}
    */
export enum StartSmartChatJobResponseDefaultLanguageEnum {
    CN = 'CN',
    EN = 'EN',
    ESP = 'ESP',
    POR = 'por',
    ARABIC = 'Arabic',
    THAI = 'Thai'
}

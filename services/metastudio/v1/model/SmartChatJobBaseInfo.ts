import { ErrorResponse } from './ErrorResponse';
import { SmartChatSubtitleConfig } from './SmartChatSubtitleConfig';
import { SmartChatVideoConfig } from './SmartChatVideoConfig';
import { SmartChatVoiceConfig } from './SmartChatVoiceConfig';


export class SmartChatJobBaseInfo {
    private 'job_id'?: string;
    public state?: SmartChatJobBaseInfoStateEnum | string;
    public duration?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'error_info'?: ErrorResponse;
    private 'create_time'?: string;
    private 'lastupdate_time'?: string;
    private 'chat_subtitle_config'?: SmartChatSubtitleConfig;
    private 'video_config'?: SmartChatVideoConfig;
    private 'voice_config_list'?: Array<SmartChatVoiceConfig>;
    private 'chat_video_type'?: SmartChatJobBaseInfoChatVideoTypeEnum | string;
    private 'is_transparent'?: boolean;
    private 'default_language'?: SmartChatJobBaseInfoDefaultLanguageEnum | string;
    private 'client_id'?: string;
    private 'is_pool_mode'?: boolean;
    private 'job_finish_reason'?: SmartChatJobBaseInfoJobFinishReasonEnum | string;
    public constructor() { 
    }
    public withJobId(jobId: string): SmartChatJobBaseInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: SmartChatJobBaseInfoStateEnum | string): SmartChatJobBaseInfo {
        this['state'] = state;
        return this;
    }
    public withDuration(duration: number): SmartChatJobBaseInfo {
        this['duration'] = duration;
        return this;
    }
    public withStartTime(startTime: string): SmartChatJobBaseInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): SmartChatJobBaseInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): SmartChatJobBaseInfo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withCreateTime(createTime: string): SmartChatJobBaseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastupdateTime(lastupdateTime: string): SmartChatJobBaseInfo {
        this['lastupdate_time'] = lastupdateTime;
        return this;
    }
    public set lastupdateTime(lastupdateTime: string  | undefined) {
        this['lastupdate_time'] = lastupdateTime;
    }
    public get lastupdateTime(): string | undefined {
        return this['lastupdate_time'];
    }
    public withChatSubtitleConfig(chatSubtitleConfig: SmartChatSubtitleConfig): SmartChatJobBaseInfo {
        this['chat_subtitle_config'] = chatSubtitleConfig;
        return this;
    }
    public set chatSubtitleConfig(chatSubtitleConfig: SmartChatSubtitleConfig  | undefined) {
        this['chat_subtitle_config'] = chatSubtitleConfig;
    }
    public get chatSubtitleConfig(): SmartChatSubtitleConfig | undefined {
        return this['chat_subtitle_config'];
    }
    public withVideoConfig(videoConfig: SmartChatVideoConfig): SmartChatJobBaseInfo {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: SmartChatVideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): SmartChatVideoConfig | undefined {
        return this['video_config'];
    }
    public withVoiceConfigList(voiceConfigList: Array<SmartChatVoiceConfig>): SmartChatJobBaseInfo {
        this['voice_config_list'] = voiceConfigList;
        return this;
    }
    public set voiceConfigList(voiceConfigList: Array<SmartChatVoiceConfig>  | undefined) {
        this['voice_config_list'] = voiceConfigList;
    }
    public get voiceConfigList(): Array<SmartChatVoiceConfig> | undefined {
        return this['voice_config_list'];
    }
    public withChatVideoType(chatVideoType: SmartChatJobBaseInfoChatVideoTypeEnum | string): SmartChatJobBaseInfo {
        this['chat_video_type'] = chatVideoType;
        return this;
    }
    public set chatVideoType(chatVideoType: SmartChatJobBaseInfoChatVideoTypeEnum | string  | undefined) {
        this['chat_video_type'] = chatVideoType;
    }
    public get chatVideoType(): SmartChatJobBaseInfoChatVideoTypeEnum | string | undefined {
        return this['chat_video_type'];
    }
    public withIsTransparent(isTransparent: boolean): SmartChatJobBaseInfo {
        this['is_transparent'] = isTransparent;
        return this;
    }
    public set isTransparent(isTransparent: boolean  | undefined) {
        this['is_transparent'] = isTransparent;
    }
    public get isTransparent(): boolean | undefined {
        return this['is_transparent'];
    }
    public withDefaultLanguage(defaultLanguage: SmartChatJobBaseInfoDefaultLanguageEnum | string): SmartChatJobBaseInfo {
        this['default_language'] = defaultLanguage;
        return this;
    }
    public set defaultLanguage(defaultLanguage: SmartChatJobBaseInfoDefaultLanguageEnum | string  | undefined) {
        this['default_language'] = defaultLanguage;
    }
    public get defaultLanguage(): SmartChatJobBaseInfoDefaultLanguageEnum | string | undefined {
        return this['default_language'];
    }
    public withClientId(clientId: string): SmartChatJobBaseInfo {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withIsPoolMode(isPoolMode: boolean): SmartChatJobBaseInfo {
        this['is_pool_mode'] = isPoolMode;
        return this;
    }
    public set isPoolMode(isPoolMode: boolean  | undefined) {
        this['is_pool_mode'] = isPoolMode;
    }
    public get isPoolMode(): boolean | undefined {
        return this['is_pool_mode'];
    }
    public withJobFinishReason(jobFinishReason: SmartChatJobBaseInfoJobFinishReasonEnum | string): SmartChatJobBaseInfo {
        this['job_finish_reason'] = jobFinishReason;
        return this;
    }
    public set jobFinishReason(jobFinishReason: SmartChatJobBaseInfoJobFinishReasonEnum | string  | undefined) {
        this['job_finish_reason'] = jobFinishReason;
    }
    public get jobFinishReason(): SmartChatJobBaseInfoJobFinishReasonEnum | string | undefined {
        return this['job_finish_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SmartChatJobBaseInfoStateEnum {
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
export enum SmartChatJobBaseInfoChatVideoTypeEnum {
    COMPUTER = 'COMPUTER',
    MOBILE = 'MOBILE',
    HUB = 'HUB'
}
/**
    * @export
    * @enum {string}
    */
export enum SmartChatJobBaseInfoDefaultLanguageEnum {
    CN = 'CN',
    EN = 'EN',
    ESP = 'ESP',
    POR = 'por',
    ARABIC = 'Arabic',
    THAI = 'Thai',
    FR = 'fr'
}
/**
    * @export
    * @enum {string}
    */
export enum SmartChatJobBaseInfoJobFinishReasonEnum {
    NORMAL = 'NORMAL',
    MUTE_TIMEOUT = 'MUTE_TIMEOUT'
}

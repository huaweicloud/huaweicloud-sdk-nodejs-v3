import { BackgroundConfigInfo } from './BackgroundConfigInfo';
import { ChatSubtitleConfig } from './ChatSubtitleConfig';
import { ChatVoiceConfig } from './ChatVoiceConfig';
import { LayerConfig } from './LayerConfig';
import { ReviewConfig } from './ReviewConfig';
import { VideoConfig } from './VideoConfig';
import { VoiceConfig } from './VoiceConfig';


export class CreateSmartChatRoomRequestBody {
    private 'room_name'?: string;
    private 'room_description'?: string;
    private 'video_config'?: VideoConfig;
    private 'model_asset_id'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'voice_config_list'?: Array<ChatVoiceConfig>;
    private 'robot_id'?: string;
    private 'billing_mode'?: CreateSmartChatRoomRequestBodyBillingModeEnum | string;
    private 'reuse_resource'?: boolean;
    public concurrency?: number;
    private 'client_nums'?: number;
    private 'default_language'?: CreateSmartChatRoomRequestBodyDefaultLanguageEnum | string;
    private 'background_config'?: BackgroundConfigInfo;
    private 'layer_config'?: Array<LayerConfig>;
    private 'review_config'?: ReviewConfig;
    private 'chat_subtitle_config'?: ChatSubtitleConfig;
    private 'chat_video_type'?: CreateSmartChatRoomRequestBodyChatVideoTypeEnum | string;
    private 'exit_mute_threshold'?: number;
    public constructor(roomName?: string) { 
        this['room_name'] = roomName;
    }
    public withRoomName(roomName: string): CreateSmartChatRoomRequestBody {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomDescription(roomDescription: string): CreateSmartChatRoomRequestBody {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withVideoConfig(videoConfig: VideoConfig): CreateSmartChatRoomRequestBody {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withModelAssetId(modelAssetId: string): CreateSmartChatRoomRequestBody {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): CreateSmartChatRoomRequestBody {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withVoiceConfigList(voiceConfigList: Array<ChatVoiceConfig>): CreateSmartChatRoomRequestBody {
        this['voice_config_list'] = voiceConfigList;
        return this;
    }
    public set voiceConfigList(voiceConfigList: Array<ChatVoiceConfig>  | undefined) {
        this['voice_config_list'] = voiceConfigList;
    }
    public get voiceConfigList(): Array<ChatVoiceConfig> | undefined {
        return this['voice_config_list'];
    }
    public withRobotId(robotId: string): CreateSmartChatRoomRequestBody {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withBillingMode(billingMode: CreateSmartChatRoomRequestBodyBillingModeEnum | string): CreateSmartChatRoomRequestBody {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: CreateSmartChatRoomRequestBodyBillingModeEnum | string  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): CreateSmartChatRoomRequestBodyBillingModeEnum | string | undefined {
        return this['billing_mode'];
    }
    public withReuseResource(reuseResource: boolean): CreateSmartChatRoomRequestBody {
        this['reuse_resource'] = reuseResource;
        return this;
    }
    public set reuseResource(reuseResource: boolean  | undefined) {
        this['reuse_resource'] = reuseResource;
    }
    public get reuseResource(): boolean | undefined {
        return this['reuse_resource'];
    }
    public withConcurrency(concurrency: number): CreateSmartChatRoomRequestBody {
        this['concurrency'] = concurrency;
        return this;
    }
    public withClientNums(clientNums: number): CreateSmartChatRoomRequestBody {
        this['client_nums'] = clientNums;
        return this;
    }
    public set clientNums(clientNums: number  | undefined) {
        this['client_nums'] = clientNums;
    }
    public get clientNums(): number | undefined {
        return this['client_nums'];
    }
    public withDefaultLanguage(defaultLanguage: CreateSmartChatRoomRequestBodyDefaultLanguageEnum | string): CreateSmartChatRoomRequestBody {
        this['default_language'] = defaultLanguage;
        return this;
    }
    public set defaultLanguage(defaultLanguage: CreateSmartChatRoomRequestBodyDefaultLanguageEnum | string  | undefined) {
        this['default_language'] = defaultLanguage;
    }
    public get defaultLanguage(): CreateSmartChatRoomRequestBodyDefaultLanguageEnum | string | undefined {
        return this['default_language'];
    }
    public withBackgroundConfig(backgroundConfig: BackgroundConfigInfo): CreateSmartChatRoomRequestBody {
        this['background_config'] = backgroundConfig;
        return this;
    }
    public set backgroundConfig(backgroundConfig: BackgroundConfigInfo  | undefined) {
        this['background_config'] = backgroundConfig;
    }
    public get backgroundConfig(): BackgroundConfigInfo | undefined {
        return this['background_config'];
    }
    public withLayerConfig(layerConfig: Array<LayerConfig>): CreateSmartChatRoomRequestBody {
        this['layer_config'] = layerConfig;
        return this;
    }
    public set layerConfig(layerConfig: Array<LayerConfig>  | undefined) {
        this['layer_config'] = layerConfig;
    }
    public get layerConfig(): Array<LayerConfig> | undefined {
        return this['layer_config'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): CreateSmartChatRoomRequestBody {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withChatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig): CreateSmartChatRoomRequestBody {
        this['chat_subtitle_config'] = chatSubtitleConfig;
        return this;
    }
    public set chatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig  | undefined) {
        this['chat_subtitle_config'] = chatSubtitleConfig;
    }
    public get chatSubtitleConfig(): ChatSubtitleConfig | undefined {
        return this['chat_subtitle_config'];
    }
    public withChatVideoType(chatVideoType: CreateSmartChatRoomRequestBodyChatVideoTypeEnum | string): CreateSmartChatRoomRequestBody {
        this['chat_video_type'] = chatVideoType;
        return this;
    }
    public set chatVideoType(chatVideoType: CreateSmartChatRoomRequestBodyChatVideoTypeEnum | string  | undefined) {
        this['chat_video_type'] = chatVideoType;
    }
    public get chatVideoType(): CreateSmartChatRoomRequestBodyChatVideoTypeEnum | string | undefined {
        return this['chat_video_type'];
    }
    public withExitMuteThreshold(exitMuteThreshold: number): CreateSmartChatRoomRequestBody {
        this['exit_mute_threshold'] = exitMuteThreshold;
        return this;
    }
    public set exitMuteThreshold(exitMuteThreshold: number  | undefined) {
        this['exit_mute_threshold'] = exitMuteThreshold;
    }
    public get exitMuteThreshold(): number | undefined {
        return this['exit_mute_threshold'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSmartChatRoomRequestBodyBillingModeEnum {
    CONCURRENCY = 'CONCURRENCY',
    CLIENT = 'CLIENT',
    CLIENT_TOKENS = 'CLIENT_TOKENS'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSmartChatRoomRequestBodyDefaultLanguageEnum {
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
export enum CreateSmartChatRoomRequestBodyChatVideoTypeEnum {
    COMPUTER = 'COMPUTER',
    MOBILE = 'MOBILE',
    HUB = 'HUB'
}

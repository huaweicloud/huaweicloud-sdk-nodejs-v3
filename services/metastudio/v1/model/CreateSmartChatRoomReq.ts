import { BackgroundConfigInfo } from './BackgroundConfigInfo';
import { ChatResourceConfig } from './ChatResourceConfig';
import { ChatSubtitleConfig } from './ChatSubtitleConfig';
import { ChatVoiceConfig } from './ChatVoiceConfig';
import { CreateSmartChatRoomRequestBody } from './CreateSmartChatRoomRequestBody';
import { LayerConfig } from './LayerConfig';
import { ReviewConfig } from './ReviewConfig';
import { VideoConfig } from './VideoConfig';
import { VoiceConfig } from './VoiceConfig';


export class CreateSmartChatRoomReq {
    private 'room_name'?: string;
    private 'room_description'?: string;
    private 'video_config'?: VideoConfig;
    private 'model_asset_id'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'voice_config_list'?: Array<ChatVoiceConfig>;
    private 'robot_id'?: string;
    public concurrency?: number;
    private 'default_language'?: CreateSmartChatRoomReqDefaultLanguageEnum | string;
    private 'background_config'?: BackgroundConfigInfo;
    private 'layer_config'?: Array<LayerConfig>;
    private 'review_config'?: ReviewConfig;
    private 'chat_subtitle_config'?: ChatSubtitleConfig;
    private 'chat_video_type'?: CreateSmartChatRoomReqChatVideoTypeEnum | string;
    private 'exit_mute_threshold'?: number;
    private 'chat_resource_config'?: Array<ChatResourceConfig>;
    public constructor(roomName?: string) { 
        this['room_name'] = roomName;
    }
    public withRoomName(roomName: string): CreateSmartChatRoomReq {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomDescription(roomDescription: string): CreateSmartChatRoomReq {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withVideoConfig(videoConfig: VideoConfig): CreateSmartChatRoomReq {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withModelAssetId(modelAssetId: string): CreateSmartChatRoomReq {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): CreateSmartChatRoomReq {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withVoiceConfigList(voiceConfigList: Array<ChatVoiceConfig>): CreateSmartChatRoomReq {
        this['voice_config_list'] = voiceConfigList;
        return this;
    }
    public set voiceConfigList(voiceConfigList: Array<ChatVoiceConfig>  | undefined) {
        this['voice_config_list'] = voiceConfigList;
    }
    public get voiceConfigList(): Array<ChatVoiceConfig> | undefined {
        return this['voice_config_list'];
    }
    public withRobotId(robotId: string): CreateSmartChatRoomReq {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withConcurrency(concurrency: number): CreateSmartChatRoomReq {
        this['concurrency'] = concurrency;
        return this;
    }
    public withDefaultLanguage(defaultLanguage: CreateSmartChatRoomReqDefaultLanguageEnum | string): CreateSmartChatRoomReq {
        this['default_language'] = defaultLanguage;
        return this;
    }
    public set defaultLanguage(defaultLanguage: CreateSmartChatRoomReqDefaultLanguageEnum | string  | undefined) {
        this['default_language'] = defaultLanguage;
    }
    public get defaultLanguage(): CreateSmartChatRoomReqDefaultLanguageEnum | string | undefined {
        return this['default_language'];
    }
    public withBackgroundConfig(backgroundConfig: BackgroundConfigInfo): CreateSmartChatRoomReq {
        this['background_config'] = backgroundConfig;
        return this;
    }
    public set backgroundConfig(backgroundConfig: BackgroundConfigInfo  | undefined) {
        this['background_config'] = backgroundConfig;
    }
    public get backgroundConfig(): BackgroundConfigInfo | undefined {
        return this['background_config'];
    }
    public withLayerConfig(layerConfig: Array<LayerConfig>): CreateSmartChatRoomReq {
        this['layer_config'] = layerConfig;
        return this;
    }
    public set layerConfig(layerConfig: Array<LayerConfig>  | undefined) {
        this['layer_config'] = layerConfig;
    }
    public get layerConfig(): Array<LayerConfig> | undefined {
        return this['layer_config'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): CreateSmartChatRoomReq {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withChatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig): CreateSmartChatRoomReq {
        this['chat_subtitle_config'] = chatSubtitleConfig;
        return this;
    }
    public set chatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig  | undefined) {
        this['chat_subtitle_config'] = chatSubtitleConfig;
    }
    public get chatSubtitleConfig(): ChatSubtitleConfig | undefined {
        return this['chat_subtitle_config'];
    }
    public withChatVideoType(chatVideoType: CreateSmartChatRoomReqChatVideoTypeEnum | string): CreateSmartChatRoomReq {
        this['chat_video_type'] = chatVideoType;
        return this;
    }
    public set chatVideoType(chatVideoType: CreateSmartChatRoomReqChatVideoTypeEnum | string  | undefined) {
        this['chat_video_type'] = chatVideoType;
    }
    public get chatVideoType(): CreateSmartChatRoomReqChatVideoTypeEnum | string | undefined {
        return this['chat_video_type'];
    }
    public withExitMuteThreshold(exitMuteThreshold: number): CreateSmartChatRoomReq {
        this['exit_mute_threshold'] = exitMuteThreshold;
        return this;
    }
    public set exitMuteThreshold(exitMuteThreshold: number  | undefined) {
        this['exit_mute_threshold'] = exitMuteThreshold;
    }
    public get exitMuteThreshold(): number | undefined {
        return this['exit_mute_threshold'];
    }
    public withChatResourceConfig(chatResourceConfig: Array<ChatResourceConfig>): CreateSmartChatRoomReq {
        this['chat_resource_config'] = chatResourceConfig;
        return this;
    }
    public set chatResourceConfig(chatResourceConfig: Array<ChatResourceConfig>  | undefined) {
        this['chat_resource_config'] = chatResourceConfig;
    }
    public get chatResourceConfig(): Array<ChatResourceConfig> | undefined {
        return this['chat_resource_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSmartChatRoomReqDefaultLanguageEnum {
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
export enum CreateSmartChatRoomReqChatVideoTypeEnum {
    COMPUTER = 'COMPUTER',
    MOBILE = 'MOBILE',
    HUB = 'HUB'
}

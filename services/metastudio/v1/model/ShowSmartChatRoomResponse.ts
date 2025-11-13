import { BackgroundConfigInfo } from './BackgroundConfigInfo';
import { ChatResourceConfigInfo } from './ChatResourceConfigInfo';
import { ChatSubtitleConfig } from './ChatSubtitleConfig';
import { ChatVoiceConfig } from './ChatVoiceConfig';
import { CreateSmartChatRoomRequestBody } from './CreateSmartChatRoomRequestBody';
import { LayerConfig } from './LayerConfig';
import { ReviewConfig } from './ReviewConfig';
import { VideoConfig } from './VideoConfig';
import { VoiceConfig } from './VoiceConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSmartChatRoomResponse extends SdkResponse {
    private 'room_name'?: string;
    private 'room_description'?: string;
    private 'video_config'?: VideoConfig;
    private 'model_asset_id'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'voice_config_list'?: Array<ChatVoiceConfig>;
    private 'robot_id'?: string;
    private 'billing_mode'?: ShowSmartChatRoomResponseBillingModeEnum | string;
    private 'reuse_resource'?: boolean;
    public concurrency?: number;
    private 'client_nums'?: number;
    private 'default_language'?: ShowSmartChatRoomResponseDefaultLanguageEnum | string;
    private 'background_config'?: BackgroundConfigInfo;
    private 'layer_config'?: Array<LayerConfig>;
    private 'review_config'?: ReviewConfig;
    private 'chat_subtitle_config'?: ChatSubtitleConfig;
    private 'chat_video_type'?: ShowSmartChatRoomResponseChatVideoTypeEnum | string;
    private 'exit_mute_threshold'?: number;
    private 'enable_semantic_action'?: boolean;
    private 'room_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'cover_url'?: string;
    private 'is_pool_mode'?: boolean;
    private 'chat_resource_config'?: Array<ChatResourceConfigInfo>;
    private 'X-Request-Id'?: string;
    public constructor(roomName?: string) { 
        super();
        this['room_name'] = roomName;
    }
    public withRoomName(roomName: string): ShowSmartChatRoomResponse {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomDescription(roomDescription: string): ShowSmartChatRoomResponse {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withVideoConfig(videoConfig: VideoConfig): ShowSmartChatRoomResponse {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withModelAssetId(modelAssetId: string): ShowSmartChatRoomResponse {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): ShowSmartChatRoomResponse {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withVoiceConfigList(voiceConfigList: Array<ChatVoiceConfig>): ShowSmartChatRoomResponse {
        this['voice_config_list'] = voiceConfigList;
        return this;
    }
    public set voiceConfigList(voiceConfigList: Array<ChatVoiceConfig>  | undefined) {
        this['voice_config_list'] = voiceConfigList;
    }
    public get voiceConfigList(): Array<ChatVoiceConfig> | undefined {
        return this['voice_config_list'];
    }
    public withRobotId(robotId: string): ShowSmartChatRoomResponse {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withBillingMode(billingMode: ShowSmartChatRoomResponseBillingModeEnum | string): ShowSmartChatRoomResponse {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: ShowSmartChatRoomResponseBillingModeEnum | string  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): ShowSmartChatRoomResponseBillingModeEnum | string | undefined {
        return this['billing_mode'];
    }
    public withReuseResource(reuseResource: boolean): ShowSmartChatRoomResponse {
        this['reuse_resource'] = reuseResource;
        return this;
    }
    public set reuseResource(reuseResource: boolean  | undefined) {
        this['reuse_resource'] = reuseResource;
    }
    public get reuseResource(): boolean | undefined {
        return this['reuse_resource'];
    }
    public withConcurrency(concurrency: number): ShowSmartChatRoomResponse {
        this['concurrency'] = concurrency;
        return this;
    }
    public withClientNums(clientNums: number): ShowSmartChatRoomResponse {
        this['client_nums'] = clientNums;
        return this;
    }
    public set clientNums(clientNums: number  | undefined) {
        this['client_nums'] = clientNums;
    }
    public get clientNums(): number | undefined {
        return this['client_nums'];
    }
    public withDefaultLanguage(defaultLanguage: ShowSmartChatRoomResponseDefaultLanguageEnum | string): ShowSmartChatRoomResponse {
        this['default_language'] = defaultLanguage;
        return this;
    }
    public set defaultLanguage(defaultLanguage: ShowSmartChatRoomResponseDefaultLanguageEnum | string  | undefined) {
        this['default_language'] = defaultLanguage;
    }
    public get defaultLanguage(): ShowSmartChatRoomResponseDefaultLanguageEnum | string | undefined {
        return this['default_language'];
    }
    public withBackgroundConfig(backgroundConfig: BackgroundConfigInfo): ShowSmartChatRoomResponse {
        this['background_config'] = backgroundConfig;
        return this;
    }
    public set backgroundConfig(backgroundConfig: BackgroundConfigInfo  | undefined) {
        this['background_config'] = backgroundConfig;
    }
    public get backgroundConfig(): BackgroundConfigInfo | undefined {
        return this['background_config'];
    }
    public withLayerConfig(layerConfig: Array<LayerConfig>): ShowSmartChatRoomResponse {
        this['layer_config'] = layerConfig;
        return this;
    }
    public set layerConfig(layerConfig: Array<LayerConfig>  | undefined) {
        this['layer_config'] = layerConfig;
    }
    public get layerConfig(): Array<LayerConfig> | undefined {
        return this['layer_config'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): ShowSmartChatRoomResponse {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withChatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig): ShowSmartChatRoomResponse {
        this['chat_subtitle_config'] = chatSubtitleConfig;
        return this;
    }
    public set chatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig  | undefined) {
        this['chat_subtitle_config'] = chatSubtitleConfig;
    }
    public get chatSubtitleConfig(): ChatSubtitleConfig | undefined {
        return this['chat_subtitle_config'];
    }
    public withChatVideoType(chatVideoType: ShowSmartChatRoomResponseChatVideoTypeEnum | string): ShowSmartChatRoomResponse {
        this['chat_video_type'] = chatVideoType;
        return this;
    }
    public set chatVideoType(chatVideoType: ShowSmartChatRoomResponseChatVideoTypeEnum | string  | undefined) {
        this['chat_video_type'] = chatVideoType;
    }
    public get chatVideoType(): ShowSmartChatRoomResponseChatVideoTypeEnum | string | undefined {
        return this['chat_video_type'];
    }
    public withExitMuteThreshold(exitMuteThreshold: number): ShowSmartChatRoomResponse {
        this['exit_mute_threshold'] = exitMuteThreshold;
        return this;
    }
    public set exitMuteThreshold(exitMuteThreshold: number  | undefined) {
        this['exit_mute_threshold'] = exitMuteThreshold;
    }
    public get exitMuteThreshold(): number | undefined {
        return this['exit_mute_threshold'];
    }
    public withEnableSemanticAction(enableSemanticAction: boolean): ShowSmartChatRoomResponse {
        this['enable_semantic_action'] = enableSemanticAction;
        return this;
    }
    public set enableSemanticAction(enableSemanticAction: boolean  | undefined) {
        this['enable_semantic_action'] = enableSemanticAction;
    }
    public get enableSemanticAction(): boolean | undefined {
        return this['enable_semantic_action'];
    }
    public withRoomId(roomId: string): ShowSmartChatRoomResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withCreateTime(createTime: string): ShowSmartChatRoomResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowSmartChatRoomResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCoverUrl(coverUrl: string): ShowSmartChatRoomResponse {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withIsPoolMode(isPoolMode: boolean): ShowSmartChatRoomResponse {
        this['is_pool_mode'] = isPoolMode;
        return this;
    }
    public set isPoolMode(isPoolMode: boolean  | undefined) {
        this['is_pool_mode'] = isPoolMode;
    }
    public get isPoolMode(): boolean | undefined {
        return this['is_pool_mode'];
    }
    public withChatResourceConfig(chatResourceConfig: Array<ChatResourceConfigInfo>): ShowSmartChatRoomResponse {
        this['chat_resource_config'] = chatResourceConfig;
        return this;
    }
    public set chatResourceConfig(chatResourceConfig: Array<ChatResourceConfigInfo>  | undefined) {
        this['chat_resource_config'] = chatResourceConfig;
    }
    public get chatResourceConfig(): Array<ChatResourceConfigInfo> | undefined {
        return this['chat_resource_config'];
    }
    public withXRequestId(xRequestId: string): ShowSmartChatRoomResponse {
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
export enum ShowSmartChatRoomResponseBillingModeEnum {
    CONCURRENCY = 'CONCURRENCY',
    CLIENT = 'CLIENT',
    CLIENT_TOKENS = 'CLIENT_TOKENS'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSmartChatRoomResponseDefaultLanguageEnum {
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
export enum ShowSmartChatRoomResponseChatVideoTypeEnum {
    COMPUTER = 'COMPUTER',
    MOBILE = 'MOBILE',
    HUB = 'HUB'
}

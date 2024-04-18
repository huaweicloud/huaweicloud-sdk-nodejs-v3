import { BackgroundConfigInfo } from './BackgroundConfigInfo';
import { ChatSubtitleConfig } from './ChatSubtitleConfig';
import { CreateSmartChatRoomReq } from './CreateSmartChatRoomReq';
import { LayerConfig } from './LayerConfig';
import { ReviewConfig } from './ReviewConfig';
import { VideoConfig } from './VideoConfig';
import { VoiceConfig } from './VoiceConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSmartChatRoomResponse extends SdkResponse {
    private 'room_name'?: string;
    private 'room_description'?: string;
    private 'video_config'?: VideoConfig;
    private 'model_asset_id'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'robot_id'?: string;
    public concurrency?: number;
    private 'background_config'?: BackgroundConfigInfo;
    private 'layer_config'?: Array<LayerConfig>;
    private 'review_config'?: ReviewConfig;
    private 'chat_subtitle_config'?: ChatSubtitleConfig;
    private 'room_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'cover_url'?: string;
    private 'X-Request-Id'?: string;
    public constructor(roomName?: string) { 
        super();
        this['room_name'] = roomName;
    }
    public withRoomName(roomName: string): UpdateSmartChatRoomResponse {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomDescription(roomDescription: string): UpdateSmartChatRoomResponse {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withVideoConfig(videoConfig: VideoConfig): UpdateSmartChatRoomResponse {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withModelAssetId(modelAssetId: string): UpdateSmartChatRoomResponse {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): UpdateSmartChatRoomResponse {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withRobotId(robotId: string): UpdateSmartChatRoomResponse {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withConcurrency(concurrency: number): UpdateSmartChatRoomResponse {
        this['concurrency'] = concurrency;
        return this;
    }
    public withBackgroundConfig(backgroundConfig: BackgroundConfigInfo): UpdateSmartChatRoomResponse {
        this['background_config'] = backgroundConfig;
        return this;
    }
    public set backgroundConfig(backgroundConfig: BackgroundConfigInfo  | undefined) {
        this['background_config'] = backgroundConfig;
    }
    public get backgroundConfig(): BackgroundConfigInfo | undefined {
        return this['background_config'];
    }
    public withLayerConfig(layerConfig: Array<LayerConfig>): UpdateSmartChatRoomResponse {
        this['layer_config'] = layerConfig;
        return this;
    }
    public set layerConfig(layerConfig: Array<LayerConfig>  | undefined) {
        this['layer_config'] = layerConfig;
    }
    public get layerConfig(): Array<LayerConfig> | undefined {
        return this['layer_config'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): UpdateSmartChatRoomResponse {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withChatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig): UpdateSmartChatRoomResponse {
        this['chat_subtitle_config'] = chatSubtitleConfig;
        return this;
    }
    public set chatSubtitleConfig(chatSubtitleConfig: ChatSubtitleConfig  | undefined) {
        this['chat_subtitle_config'] = chatSubtitleConfig;
    }
    public get chatSubtitleConfig(): ChatSubtitleConfig | undefined {
        return this['chat_subtitle_config'];
    }
    public withRoomId(roomId: string): UpdateSmartChatRoomResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withCreateTime(createTime: string): UpdateSmartChatRoomResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateSmartChatRoomResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCoverUrl(coverUrl: string): UpdateSmartChatRoomResponse {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withXRequestId(xRequestId: string): UpdateSmartChatRoomResponse {
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
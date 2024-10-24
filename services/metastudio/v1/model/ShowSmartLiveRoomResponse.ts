import { CoStreamerConfig } from './CoStreamerConfig';
import { CreateSmartLiveRoomReqBaseInfo } from './CreateSmartLiveRoomReqBaseInfo';
import { ErrorResponse } from './ErrorResponse';
import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';
import { LiveRoomInteractionConfig } from './LiveRoomInteractionConfig';
import { LiveRoomInteractionRuleInfo } from './LiveRoomInteractionRuleInfo';
import { LiveVideoScriptInfo } from './LiveVideoScriptInfo';
import { PlatformLiveDetailInfo } from './PlatformLiveDetailInfo';
import { PlayPolicy } from './PlayPolicy';
import { RTCLiveEventCallBackConfig } from './RTCLiveEventCallBackConfig';
import { ReviewConfig } from './ReviewConfig';
import { SharedConfig } from './SharedConfig';
import { VideoConfig } from './VideoConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSmartLiveRoomResponse extends SdkResponse {
    private 'room_name'?: string;
    private 'room_description'?: string;
    private 'room_type'?: ShowSmartLiveRoomResponseRoomTypeEnum | string;
    private 'scene_scripts'?: Array<LiveVideoScriptInfo>;
    private 'interaction_config'?: LiveRoomInteractionConfig;
    private 'interaction_rules'?: Array<LiveRoomInteractionRuleInfo>;
    private 'play_policy'?: PlayPolicy;
    private 'video_config'?: VideoConfig;
    private 'output_urls'?: Array<string>;
    private 'stream_keys'?: Array<string>;
    private 'backup_model_asset_ids'?: Array<string>;
    private 'live_event_callback_config'?: LiveEventCallBackConfig;
    private 'rtc_callback_config'?: RTCLiveEventCallBackConfig;
    private 'review_config'?: ReviewConfig;
    private 'shared_config'?: SharedConfig;
    private 'view_mode'?: ShowSmartLiveRoomResponseViewModeEnum | string;
    private 'co_streamer_config'?: CoStreamerConfig;
    private 'priv_data'?: string;
    private 'room_id'?: string;
    private 'relation_live_platform_info'?: PlatformLiveDetailInfo;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'cover_url'?: string;
    public thumbnail?: string;
    private 'room_state'?: ShowSmartLiveRoomResponseRoomStateEnum | string;
    private 'error_info'?: ErrorResponse;
    private 'X-Request-Id'?: string;
    public constructor(roomName?: string) { 
        super();
        this['room_name'] = roomName;
    }
    public withRoomName(roomName: string): ShowSmartLiveRoomResponse {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomDescription(roomDescription: string): ShowSmartLiveRoomResponse {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withRoomType(roomType: ShowSmartLiveRoomResponseRoomTypeEnum | string): ShowSmartLiveRoomResponse {
        this['room_type'] = roomType;
        return this;
    }
    public set roomType(roomType: ShowSmartLiveRoomResponseRoomTypeEnum | string  | undefined) {
        this['room_type'] = roomType;
    }
    public get roomType(): ShowSmartLiveRoomResponseRoomTypeEnum | string | undefined {
        return this['room_type'];
    }
    public withSceneScripts(sceneScripts: Array<LiveVideoScriptInfo>): ShowSmartLiveRoomResponse {
        this['scene_scripts'] = sceneScripts;
        return this;
    }
    public set sceneScripts(sceneScripts: Array<LiveVideoScriptInfo>  | undefined) {
        this['scene_scripts'] = sceneScripts;
    }
    public get sceneScripts(): Array<LiveVideoScriptInfo> | undefined {
        return this['scene_scripts'];
    }
    public withInteractionConfig(interactionConfig: LiveRoomInteractionConfig): ShowSmartLiveRoomResponse {
        this['interaction_config'] = interactionConfig;
        return this;
    }
    public set interactionConfig(interactionConfig: LiveRoomInteractionConfig  | undefined) {
        this['interaction_config'] = interactionConfig;
    }
    public get interactionConfig(): LiveRoomInteractionConfig | undefined {
        return this['interaction_config'];
    }
    public withInteractionRules(interactionRules: Array<LiveRoomInteractionRuleInfo>): ShowSmartLiveRoomResponse {
        this['interaction_rules'] = interactionRules;
        return this;
    }
    public set interactionRules(interactionRules: Array<LiveRoomInteractionRuleInfo>  | undefined) {
        this['interaction_rules'] = interactionRules;
    }
    public get interactionRules(): Array<LiveRoomInteractionRuleInfo> | undefined {
        return this['interaction_rules'];
    }
    public withPlayPolicy(playPolicy: PlayPolicy): ShowSmartLiveRoomResponse {
        this['play_policy'] = playPolicy;
        return this;
    }
    public set playPolicy(playPolicy: PlayPolicy  | undefined) {
        this['play_policy'] = playPolicy;
    }
    public get playPolicy(): PlayPolicy | undefined {
        return this['play_policy'];
    }
    public withVideoConfig(videoConfig: VideoConfig): ShowSmartLiveRoomResponse {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withOutputUrls(outputUrls: Array<string>): ShowSmartLiveRoomResponse {
        this['output_urls'] = outputUrls;
        return this;
    }
    public set outputUrls(outputUrls: Array<string>  | undefined) {
        this['output_urls'] = outputUrls;
    }
    public get outputUrls(): Array<string> | undefined {
        return this['output_urls'];
    }
    public withStreamKeys(streamKeys: Array<string>): ShowSmartLiveRoomResponse {
        this['stream_keys'] = streamKeys;
        return this;
    }
    public set streamKeys(streamKeys: Array<string>  | undefined) {
        this['stream_keys'] = streamKeys;
    }
    public get streamKeys(): Array<string> | undefined {
        return this['stream_keys'];
    }
    public withBackupModelAssetIds(backupModelAssetIds: Array<string>): ShowSmartLiveRoomResponse {
        this['backup_model_asset_ids'] = backupModelAssetIds;
        return this;
    }
    public set backupModelAssetIds(backupModelAssetIds: Array<string>  | undefined) {
        this['backup_model_asset_ids'] = backupModelAssetIds;
    }
    public get backupModelAssetIds(): Array<string> | undefined {
        return this['backup_model_asset_ids'];
    }
    public withLiveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig): ShowSmartLiveRoomResponse {
        this['live_event_callback_config'] = liveEventCallbackConfig;
        return this;
    }
    public set liveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig  | undefined) {
        this['live_event_callback_config'] = liveEventCallbackConfig;
    }
    public get liveEventCallbackConfig(): LiveEventCallBackConfig | undefined {
        return this['live_event_callback_config'];
    }
    public withRtcCallbackConfig(rtcCallbackConfig: RTCLiveEventCallBackConfig): ShowSmartLiveRoomResponse {
        this['rtc_callback_config'] = rtcCallbackConfig;
        return this;
    }
    public set rtcCallbackConfig(rtcCallbackConfig: RTCLiveEventCallBackConfig  | undefined) {
        this['rtc_callback_config'] = rtcCallbackConfig;
    }
    public get rtcCallbackConfig(): RTCLiveEventCallBackConfig | undefined {
        return this['rtc_callback_config'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): ShowSmartLiveRoomResponse {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withSharedConfig(sharedConfig: SharedConfig): ShowSmartLiveRoomResponse {
        this['shared_config'] = sharedConfig;
        return this;
    }
    public set sharedConfig(sharedConfig: SharedConfig  | undefined) {
        this['shared_config'] = sharedConfig;
    }
    public get sharedConfig(): SharedConfig | undefined {
        return this['shared_config'];
    }
    public withViewMode(viewMode: ShowSmartLiveRoomResponseViewModeEnum | string): ShowSmartLiveRoomResponse {
        this['view_mode'] = viewMode;
        return this;
    }
    public set viewMode(viewMode: ShowSmartLiveRoomResponseViewModeEnum | string  | undefined) {
        this['view_mode'] = viewMode;
    }
    public get viewMode(): ShowSmartLiveRoomResponseViewModeEnum | string | undefined {
        return this['view_mode'];
    }
    public withCoStreamerConfig(coStreamerConfig: CoStreamerConfig): ShowSmartLiveRoomResponse {
        this['co_streamer_config'] = coStreamerConfig;
        return this;
    }
    public set coStreamerConfig(coStreamerConfig: CoStreamerConfig  | undefined) {
        this['co_streamer_config'] = coStreamerConfig;
    }
    public get coStreamerConfig(): CoStreamerConfig | undefined {
        return this['co_streamer_config'];
    }
    public withPrivData(privData: string): ShowSmartLiveRoomResponse {
        this['priv_data'] = privData;
        return this;
    }
    public set privData(privData: string  | undefined) {
        this['priv_data'] = privData;
    }
    public get privData(): string | undefined {
        return this['priv_data'];
    }
    public withRoomId(roomId: string): ShowSmartLiveRoomResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withRelationLivePlatformInfo(relationLivePlatformInfo: PlatformLiveDetailInfo): ShowSmartLiveRoomResponse {
        this['relation_live_platform_info'] = relationLivePlatformInfo;
        return this;
    }
    public set relationLivePlatformInfo(relationLivePlatformInfo: PlatformLiveDetailInfo  | undefined) {
        this['relation_live_platform_info'] = relationLivePlatformInfo;
    }
    public get relationLivePlatformInfo(): PlatformLiveDetailInfo | undefined {
        return this['relation_live_platform_info'];
    }
    public withCreateTime(createTime: string): ShowSmartLiveRoomResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowSmartLiveRoomResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCoverUrl(coverUrl: string): ShowSmartLiveRoomResponse {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withThumbnail(thumbnail: string): ShowSmartLiveRoomResponse {
        this['thumbnail'] = thumbnail;
        return this;
    }
    public withRoomState(roomState: ShowSmartLiveRoomResponseRoomStateEnum | string): ShowSmartLiveRoomResponse {
        this['room_state'] = roomState;
        return this;
    }
    public set roomState(roomState: ShowSmartLiveRoomResponseRoomStateEnum | string  | undefined) {
        this['room_state'] = roomState;
    }
    public get roomState(): ShowSmartLiveRoomResponseRoomStateEnum | string | undefined {
        return this['room_state'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): ShowSmartLiveRoomResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withXRequestId(xRequestId: string): ShowSmartLiveRoomResponse {
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
export enum ShowSmartLiveRoomResponseRoomTypeEnum {
    NORMAL = 'NORMAL',
    TEMP = 'TEMP',
    TEMPLATE = 'TEMPLATE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSmartLiveRoomResponseViewModeEnum {
    LANDSCAPE = 'LANDSCAPE',
    VERTICAL = 'VERTICAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSmartLiveRoomResponseRoomStateEnum {
    ENABLE = 'ENABLE',
    DISABLE = 'DISABLE',
    BLOCKED = 'BLOCKED'
}

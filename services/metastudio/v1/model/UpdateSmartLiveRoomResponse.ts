import { CreateSmartLiveRoomReq } from './CreateSmartLiveRoomReq';
import { ErrorResponse } from './ErrorResponse';
import { InteractionRuleInfo } from './InteractionRuleInfo';
import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';
import { LiveVideoScriptInfo } from './LiveVideoScriptInfo';
import { PlayPolicy } from './PlayPolicy';
import { ReviewConfig } from './ReviewConfig';
import { SharedConfig } from './SharedConfig';
import { VideoConfig } from './VideoConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSmartLiveRoomResponse extends SdkResponse {
    private 'room_name'?: string;
    private 'room_description'?: string;
    private 'room_type'?: UpdateSmartLiveRoomResponseRoomTypeEnum | string;
    private 'scene_scripts'?: Array<LiveVideoScriptInfo>;
    private 'interaction_rules'?: Array<InteractionRuleInfo>;
    private 'play_policy'?: PlayPolicy;
    private 'video_config'?: VideoConfig;
    private 'output_urls'?: Array<string>;
    private 'stream_keys'?: Array<string>;
    private 'backup_model_asset_ids'?: Array<string>;
    private 'live_event_callback_config'?: LiveEventCallBackConfig;
    private 'review_config'?: ReviewConfig;
    private 'shared_config'?: SharedConfig;
    private 'room_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'cover_url'?: string;
    private 'room_state'?: UpdateSmartLiveRoomResponseRoomStateEnum | string;
    private 'error_info'?: ErrorResponse;
    private 'X-Request-Id'?: string;
    public constructor(roomName?: string) { 
        super();
        this['room_name'] = roomName;
    }
    public withRoomName(roomName: string): UpdateSmartLiveRoomResponse {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomDescription(roomDescription: string): UpdateSmartLiveRoomResponse {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withRoomType(roomType: UpdateSmartLiveRoomResponseRoomTypeEnum | string): UpdateSmartLiveRoomResponse {
        this['room_type'] = roomType;
        return this;
    }
    public set roomType(roomType: UpdateSmartLiveRoomResponseRoomTypeEnum | string  | undefined) {
        this['room_type'] = roomType;
    }
    public get roomType(): UpdateSmartLiveRoomResponseRoomTypeEnum | string | undefined {
        return this['room_type'];
    }
    public withSceneScripts(sceneScripts: Array<LiveVideoScriptInfo>): UpdateSmartLiveRoomResponse {
        this['scene_scripts'] = sceneScripts;
        return this;
    }
    public set sceneScripts(sceneScripts: Array<LiveVideoScriptInfo>  | undefined) {
        this['scene_scripts'] = sceneScripts;
    }
    public get sceneScripts(): Array<LiveVideoScriptInfo> | undefined {
        return this['scene_scripts'];
    }
    public withInteractionRules(interactionRules: Array<InteractionRuleInfo>): UpdateSmartLiveRoomResponse {
        this['interaction_rules'] = interactionRules;
        return this;
    }
    public set interactionRules(interactionRules: Array<InteractionRuleInfo>  | undefined) {
        this['interaction_rules'] = interactionRules;
    }
    public get interactionRules(): Array<InteractionRuleInfo> | undefined {
        return this['interaction_rules'];
    }
    public withPlayPolicy(playPolicy: PlayPolicy): UpdateSmartLiveRoomResponse {
        this['play_policy'] = playPolicy;
        return this;
    }
    public set playPolicy(playPolicy: PlayPolicy  | undefined) {
        this['play_policy'] = playPolicy;
    }
    public get playPolicy(): PlayPolicy | undefined {
        return this['play_policy'];
    }
    public withVideoConfig(videoConfig: VideoConfig): UpdateSmartLiveRoomResponse {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withOutputUrls(outputUrls: Array<string>): UpdateSmartLiveRoomResponse {
        this['output_urls'] = outputUrls;
        return this;
    }
    public set outputUrls(outputUrls: Array<string>  | undefined) {
        this['output_urls'] = outputUrls;
    }
    public get outputUrls(): Array<string> | undefined {
        return this['output_urls'];
    }
    public withStreamKeys(streamKeys: Array<string>): UpdateSmartLiveRoomResponse {
        this['stream_keys'] = streamKeys;
        return this;
    }
    public set streamKeys(streamKeys: Array<string>  | undefined) {
        this['stream_keys'] = streamKeys;
    }
    public get streamKeys(): Array<string> | undefined {
        return this['stream_keys'];
    }
    public withBackupModelAssetIds(backupModelAssetIds: Array<string>): UpdateSmartLiveRoomResponse {
        this['backup_model_asset_ids'] = backupModelAssetIds;
        return this;
    }
    public set backupModelAssetIds(backupModelAssetIds: Array<string>  | undefined) {
        this['backup_model_asset_ids'] = backupModelAssetIds;
    }
    public get backupModelAssetIds(): Array<string> | undefined {
        return this['backup_model_asset_ids'];
    }
    public withLiveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig): UpdateSmartLiveRoomResponse {
        this['live_event_callback_config'] = liveEventCallbackConfig;
        return this;
    }
    public set liveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig  | undefined) {
        this['live_event_callback_config'] = liveEventCallbackConfig;
    }
    public get liveEventCallbackConfig(): LiveEventCallBackConfig | undefined {
        return this['live_event_callback_config'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): UpdateSmartLiveRoomResponse {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withSharedConfig(sharedConfig: SharedConfig): UpdateSmartLiveRoomResponse {
        this['shared_config'] = sharedConfig;
        return this;
    }
    public set sharedConfig(sharedConfig: SharedConfig  | undefined) {
        this['shared_config'] = sharedConfig;
    }
    public get sharedConfig(): SharedConfig | undefined {
        return this['shared_config'];
    }
    public withRoomId(roomId: string): UpdateSmartLiveRoomResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withCreateTime(createTime: string): UpdateSmartLiveRoomResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateSmartLiveRoomResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCoverUrl(coverUrl: string): UpdateSmartLiveRoomResponse {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withRoomState(roomState: UpdateSmartLiveRoomResponseRoomStateEnum | string): UpdateSmartLiveRoomResponse {
        this['room_state'] = roomState;
        return this;
    }
    public set roomState(roomState: UpdateSmartLiveRoomResponseRoomStateEnum | string  | undefined) {
        this['room_state'] = roomState;
    }
    public get roomState(): UpdateSmartLiveRoomResponseRoomStateEnum | string | undefined {
        return this['room_state'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): UpdateSmartLiveRoomResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withXRequestId(xRequestId: string): UpdateSmartLiveRoomResponse {
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
export enum UpdateSmartLiveRoomResponseRoomTypeEnum {
    NORMAL = 'NORMAL',
    TEMP = 'TEMP',
    TEMPLATE = 'TEMPLATE'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateSmartLiveRoomResponseRoomStateEnum {
    ENABLE = 'ENABLE',
    DISABLE = 'DISABLE',
    BLOCKED = 'BLOCKED'
}

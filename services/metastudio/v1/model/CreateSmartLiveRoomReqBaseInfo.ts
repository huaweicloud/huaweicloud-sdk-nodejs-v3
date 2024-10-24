import { CoStreamerConfig } from './CoStreamerConfig';
import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';
import { LiveRoomInteractionConfig } from './LiveRoomInteractionConfig';
import { LiveRoomInteractionRuleInfo } from './LiveRoomInteractionRuleInfo';
import { LiveVideoScriptInfo } from './LiveVideoScriptInfo';
import { PlayPolicy } from './PlayPolicy';
import { RTCLiveEventCallBackConfig } from './RTCLiveEventCallBackConfig';
import { ReviewConfig } from './ReviewConfig';
import { SharedConfig } from './SharedConfig';
import { VideoConfig } from './VideoConfig';


export class CreateSmartLiveRoomReqBaseInfo {
    private 'room_name'?: string;
    private 'room_description'?: string;
    private 'room_type'?: CreateSmartLiveRoomReqBaseInfoRoomTypeEnum | string;
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
    private 'view_mode'?: CreateSmartLiveRoomReqBaseInfoViewModeEnum | string;
    private 'co_streamer_config'?: CoStreamerConfig;
    private 'priv_data'?: string;
    public constructor(roomName?: string) { 
        this['room_name'] = roomName;
    }
    public withRoomName(roomName: string): CreateSmartLiveRoomReqBaseInfo {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomDescription(roomDescription: string): CreateSmartLiveRoomReqBaseInfo {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withRoomType(roomType: CreateSmartLiveRoomReqBaseInfoRoomTypeEnum | string): CreateSmartLiveRoomReqBaseInfo {
        this['room_type'] = roomType;
        return this;
    }
    public set roomType(roomType: CreateSmartLiveRoomReqBaseInfoRoomTypeEnum | string  | undefined) {
        this['room_type'] = roomType;
    }
    public get roomType(): CreateSmartLiveRoomReqBaseInfoRoomTypeEnum | string | undefined {
        return this['room_type'];
    }
    public withSceneScripts(sceneScripts: Array<LiveVideoScriptInfo>): CreateSmartLiveRoomReqBaseInfo {
        this['scene_scripts'] = sceneScripts;
        return this;
    }
    public set sceneScripts(sceneScripts: Array<LiveVideoScriptInfo>  | undefined) {
        this['scene_scripts'] = sceneScripts;
    }
    public get sceneScripts(): Array<LiveVideoScriptInfo> | undefined {
        return this['scene_scripts'];
    }
    public withInteractionConfig(interactionConfig: LiveRoomInteractionConfig): CreateSmartLiveRoomReqBaseInfo {
        this['interaction_config'] = interactionConfig;
        return this;
    }
    public set interactionConfig(interactionConfig: LiveRoomInteractionConfig  | undefined) {
        this['interaction_config'] = interactionConfig;
    }
    public get interactionConfig(): LiveRoomInteractionConfig | undefined {
        return this['interaction_config'];
    }
    public withInteractionRules(interactionRules: Array<LiveRoomInteractionRuleInfo>): CreateSmartLiveRoomReqBaseInfo {
        this['interaction_rules'] = interactionRules;
        return this;
    }
    public set interactionRules(interactionRules: Array<LiveRoomInteractionRuleInfo>  | undefined) {
        this['interaction_rules'] = interactionRules;
    }
    public get interactionRules(): Array<LiveRoomInteractionRuleInfo> | undefined {
        return this['interaction_rules'];
    }
    public withPlayPolicy(playPolicy: PlayPolicy): CreateSmartLiveRoomReqBaseInfo {
        this['play_policy'] = playPolicy;
        return this;
    }
    public set playPolicy(playPolicy: PlayPolicy  | undefined) {
        this['play_policy'] = playPolicy;
    }
    public get playPolicy(): PlayPolicy | undefined {
        return this['play_policy'];
    }
    public withVideoConfig(videoConfig: VideoConfig): CreateSmartLiveRoomReqBaseInfo {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withOutputUrls(outputUrls: Array<string>): CreateSmartLiveRoomReqBaseInfo {
        this['output_urls'] = outputUrls;
        return this;
    }
    public set outputUrls(outputUrls: Array<string>  | undefined) {
        this['output_urls'] = outputUrls;
    }
    public get outputUrls(): Array<string> | undefined {
        return this['output_urls'];
    }
    public withStreamKeys(streamKeys: Array<string>): CreateSmartLiveRoomReqBaseInfo {
        this['stream_keys'] = streamKeys;
        return this;
    }
    public set streamKeys(streamKeys: Array<string>  | undefined) {
        this['stream_keys'] = streamKeys;
    }
    public get streamKeys(): Array<string> | undefined {
        return this['stream_keys'];
    }
    public withBackupModelAssetIds(backupModelAssetIds: Array<string>): CreateSmartLiveRoomReqBaseInfo {
        this['backup_model_asset_ids'] = backupModelAssetIds;
        return this;
    }
    public set backupModelAssetIds(backupModelAssetIds: Array<string>  | undefined) {
        this['backup_model_asset_ids'] = backupModelAssetIds;
    }
    public get backupModelAssetIds(): Array<string> | undefined {
        return this['backup_model_asset_ids'];
    }
    public withLiveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig): CreateSmartLiveRoomReqBaseInfo {
        this['live_event_callback_config'] = liveEventCallbackConfig;
        return this;
    }
    public set liveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig  | undefined) {
        this['live_event_callback_config'] = liveEventCallbackConfig;
    }
    public get liveEventCallbackConfig(): LiveEventCallBackConfig | undefined {
        return this['live_event_callback_config'];
    }
    public withRtcCallbackConfig(rtcCallbackConfig: RTCLiveEventCallBackConfig): CreateSmartLiveRoomReqBaseInfo {
        this['rtc_callback_config'] = rtcCallbackConfig;
        return this;
    }
    public set rtcCallbackConfig(rtcCallbackConfig: RTCLiveEventCallBackConfig  | undefined) {
        this['rtc_callback_config'] = rtcCallbackConfig;
    }
    public get rtcCallbackConfig(): RTCLiveEventCallBackConfig | undefined {
        return this['rtc_callback_config'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): CreateSmartLiveRoomReqBaseInfo {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withSharedConfig(sharedConfig: SharedConfig): CreateSmartLiveRoomReqBaseInfo {
        this['shared_config'] = sharedConfig;
        return this;
    }
    public set sharedConfig(sharedConfig: SharedConfig  | undefined) {
        this['shared_config'] = sharedConfig;
    }
    public get sharedConfig(): SharedConfig | undefined {
        return this['shared_config'];
    }
    public withViewMode(viewMode: CreateSmartLiveRoomReqBaseInfoViewModeEnum | string): CreateSmartLiveRoomReqBaseInfo {
        this['view_mode'] = viewMode;
        return this;
    }
    public set viewMode(viewMode: CreateSmartLiveRoomReqBaseInfoViewModeEnum | string  | undefined) {
        this['view_mode'] = viewMode;
    }
    public get viewMode(): CreateSmartLiveRoomReqBaseInfoViewModeEnum | string | undefined {
        return this['view_mode'];
    }
    public withCoStreamerConfig(coStreamerConfig: CoStreamerConfig): CreateSmartLiveRoomReqBaseInfo {
        this['co_streamer_config'] = coStreamerConfig;
        return this;
    }
    public set coStreamerConfig(coStreamerConfig: CoStreamerConfig  | undefined) {
        this['co_streamer_config'] = coStreamerConfig;
    }
    public get coStreamerConfig(): CoStreamerConfig | undefined {
        return this['co_streamer_config'];
    }
    public withPrivData(privData: string): CreateSmartLiveRoomReqBaseInfo {
        this['priv_data'] = privData;
        return this;
    }
    public set privData(privData: string  | undefined) {
        this['priv_data'] = privData;
    }
    public get privData(): string | undefined {
        return this['priv_data'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSmartLiveRoomReqBaseInfoRoomTypeEnum {
    NORMAL = 'NORMAL',
    TEMP = 'TEMP',
    TEMPLATE = 'TEMPLATE'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSmartLiveRoomReqBaseInfoViewModeEnum {
    LANDSCAPE = 'LANDSCAPE',
    VERTICAL = 'VERTICAL'
}

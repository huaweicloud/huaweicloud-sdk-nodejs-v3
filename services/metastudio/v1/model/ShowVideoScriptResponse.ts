import { ActionConfig } from './ActionConfig';
import { BackgroundMusicConfig } from './BackgroundMusicConfig';
import { ReviewConfig } from './ReviewConfig';
import { ShootScriptAudioFiles } from './ShootScriptAudioFiles';
import { ShootScriptShowItem } from './ShootScriptShowItem';
import { VideoConfig } from './VideoConfig';
import { VideoScriptsShowInfo } from './VideoScriptsShowInfo';
import { VoiceConfig } from './VoiceConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVideoScriptResponse extends SdkResponse {
    private 'script_name'?: string;
    private 'script_description'?: string;
    private 'view_mode'?: ShowVideoScriptResponseViewModeEnum | string;
    private 'model_asset_id'?: string;
    private 'model_asset_type'?: ShowVideoScriptResponseModelAssetTypeEnum | string;
    private 'voice_config'?: VoiceConfig;
    private 'video_config'?: VideoConfig;
    private 'scene_asset_id'?: string;
    private 'priv_data'?: string;
    private 'background_music_config'?: BackgroundMusicConfig;
    private 'review_config'?: ReviewConfig;
    private 'audio_files'?: ShootScriptAudioFiles;
    private 'action_config'?: ActionConfig;
    private 'shoot_scripts'?: Array<ShootScriptShowItem>;
    private 'script_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'script_cover_url'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withScriptName(scriptName: string): ShowVideoScriptResponse {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withScriptDescription(scriptDescription: string): ShowVideoScriptResponse {
        this['script_description'] = scriptDescription;
        return this;
    }
    public set scriptDescription(scriptDescription: string  | undefined) {
        this['script_description'] = scriptDescription;
    }
    public get scriptDescription(): string | undefined {
        return this['script_description'];
    }
    public withViewMode(viewMode: ShowVideoScriptResponseViewModeEnum | string): ShowVideoScriptResponse {
        this['view_mode'] = viewMode;
        return this;
    }
    public set viewMode(viewMode: ShowVideoScriptResponseViewModeEnum | string  | undefined) {
        this['view_mode'] = viewMode;
    }
    public get viewMode(): ShowVideoScriptResponseViewModeEnum | string | undefined {
        return this['view_mode'];
    }
    public withModelAssetId(modelAssetId: string): ShowVideoScriptResponse {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withModelAssetType(modelAssetType: ShowVideoScriptResponseModelAssetTypeEnum | string): ShowVideoScriptResponse {
        this['model_asset_type'] = modelAssetType;
        return this;
    }
    public set modelAssetType(modelAssetType: ShowVideoScriptResponseModelAssetTypeEnum | string  | undefined) {
        this['model_asset_type'] = modelAssetType;
    }
    public get modelAssetType(): ShowVideoScriptResponseModelAssetTypeEnum | string | undefined {
        return this['model_asset_type'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): ShowVideoScriptResponse {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withVideoConfig(videoConfig: VideoConfig): ShowVideoScriptResponse {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withSceneAssetId(sceneAssetId: string): ShowVideoScriptResponse {
        this['scene_asset_id'] = sceneAssetId;
        return this;
    }
    public set sceneAssetId(sceneAssetId: string  | undefined) {
        this['scene_asset_id'] = sceneAssetId;
    }
    public get sceneAssetId(): string | undefined {
        return this['scene_asset_id'];
    }
    public withPrivData(privData: string): ShowVideoScriptResponse {
        this['priv_data'] = privData;
        return this;
    }
    public set privData(privData: string  | undefined) {
        this['priv_data'] = privData;
    }
    public get privData(): string | undefined {
        return this['priv_data'];
    }
    public withBackgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig): ShowVideoScriptResponse {
        this['background_music_config'] = backgroundMusicConfig;
        return this;
    }
    public set backgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig  | undefined) {
        this['background_music_config'] = backgroundMusicConfig;
    }
    public get backgroundMusicConfig(): BackgroundMusicConfig | undefined {
        return this['background_music_config'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): ShowVideoScriptResponse {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withAudioFiles(audioFiles: ShootScriptAudioFiles): ShowVideoScriptResponse {
        this['audio_files'] = audioFiles;
        return this;
    }
    public set audioFiles(audioFiles: ShootScriptAudioFiles  | undefined) {
        this['audio_files'] = audioFiles;
    }
    public get audioFiles(): ShootScriptAudioFiles | undefined {
        return this['audio_files'];
    }
    public withActionConfig(actionConfig: ActionConfig): ShowVideoScriptResponse {
        this['action_config'] = actionConfig;
        return this;
    }
    public set actionConfig(actionConfig: ActionConfig  | undefined) {
        this['action_config'] = actionConfig;
    }
    public get actionConfig(): ActionConfig | undefined {
        return this['action_config'];
    }
    public withShootScripts(shootScripts: Array<ShootScriptShowItem>): ShowVideoScriptResponse {
        this['shoot_scripts'] = shootScripts;
        return this;
    }
    public set shootScripts(shootScripts: Array<ShootScriptShowItem>  | undefined) {
        this['shoot_scripts'] = shootScripts;
    }
    public get shootScripts(): Array<ShootScriptShowItem> | undefined {
        return this['shoot_scripts'];
    }
    public withScriptId(scriptId: string): ShowVideoScriptResponse {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withCreateTime(createTime: string): ShowVideoScriptResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowVideoScriptResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withScriptCoverUrl(scriptCoverUrl: string): ShowVideoScriptResponse {
        this['script_cover_url'] = scriptCoverUrl;
        return this;
    }
    public set scriptCoverUrl(scriptCoverUrl: string  | undefined) {
        this['script_cover_url'] = scriptCoverUrl;
    }
    public get scriptCoverUrl(): string | undefined {
        return this['script_cover_url'];
    }
    public withXRequestId(xRequestId: string): ShowVideoScriptResponse {
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
export enum ShowVideoScriptResponseViewModeEnum {
    LANDSCAPE = 'LANDSCAPE',
    VERTICAL = 'VERTICAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowVideoScriptResponseModelAssetTypeEnum {
    HUMAN_MODEL_2D = 'HUMAN_MODEL_2D',
    HUMAN_MODEL_3D = 'HUMAN_MODEL_3D'
}

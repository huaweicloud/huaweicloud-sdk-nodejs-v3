import { BackgroundMusicConfig } from './BackgroundMusicConfig';
import { ReviewConfig } from './ReviewConfig';
import { VideoConfig } from './VideoConfig';
import { VoiceConfig } from './VoiceConfig';


export class VideoScriptsSimpleInfo {
    private 'script_name'?: string;
    private 'script_description'?: string;
    private 'model_asset_id'?: string;
    private 'model_asset_type'?: VideoScriptsSimpleInfoModelAssetTypeEnum | string;
    private 'voice_config'?: VoiceConfig;
    private 'video_config'?: VideoConfig;
    private 'scene_asset_id'?: string;
    private 'priv_data'?: string;
    private 'background_music_config'?: BackgroundMusicConfig;
    private 'review_config'?: ReviewConfig;
    public constructor() { 
    }
    public withScriptName(scriptName: string): VideoScriptsSimpleInfo {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withScriptDescription(scriptDescription: string): VideoScriptsSimpleInfo {
        this['script_description'] = scriptDescription;
        return this;
    }
    public set scriptDescription(scriptDescription: string  | undefined) {
        this['script_description'] = scriptDescription;
    }
    public get scriptDescription(): string | undefined {
        return this['script_description'];
    }
    public withModelAssetId(modelAssetId: string): VideoScriptsSimpleInfo {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withModelAssetType(modelAssetType: VideoScriptsSimpleInfoModelAssetTypeEnum | string): VideoScriptsSimpleInfo {
        this['model_asset_type'] = modelAssetType;
        return this;
    }
    public set modelAssetType(modelAssetType: VideoScriptsSimpleInfoModelAssetTypeEnum | string  | undefined) {
        this['model_asset_type'] = modelAssetType;
    }
    public get modelAssetType(): VideoScriptsSimpleInfoModelAssetTypeEnum | string | undefined {
        return this['model_asset_type'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): VideoScriptsSimpleInfo {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withVideoConfig(videoConfig: VideoConfig): VideoScriptsSimpleInfo {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withSceneAssetId(sceneAssetId: string): VideoScriptsSimpleInfo {
        this['scene_asset_id'] = sceneAssetId;
        return this;
    }
    public set sceneAssetId(sceneAssetId: string  | undefined) {
        this['scene_asset_id'] = sceneAssetId;
    }
    public get sceneAssetId(): string | undefined {
        return this['scene_asset_id'];
    }
    public withPrivData(privData: string): VideoScriptsSimpleInfo {
        this['priv_data'] = privData;
        return this;
    }
    public set privData(privData: string  | undefined) {
        this['priv_data'] = privData;
    }
    public get privData(): string | undefined {
        return this['priv_data'];
    }
    public withBackgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig): VideoScriptsSimpleInfo {
        this['background_music_config'] = backgroundMusicConfig;
        return this;
    }
    public set backgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig  | undefined) {
        this['background_music_config'] = backgroundMusicConfig;
    }
    public get backgroundMusicConfig(): BackgroundMusicConfig | undefined {
        return this['background_music_config'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): VideoScriptsSimpleInfo {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoScriptsSimpleInfoModelAssetTypeEnum {
    HUMAN_MODEL_2D = 'HUMAN_MODEL_2D',
    HUMAN_MODEL_3D = 'HUMAN_MODEL_3D'
}

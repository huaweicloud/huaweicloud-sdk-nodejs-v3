import { BackgroundMusicConfig } from './BackgroundMusicConfig';
import { ShootScriptItem } from './ShootScriptItem';
import { VideoConfig } from './VideoConfig';
import { VoiceConfig } from './VoiceConfig';


export class UpdateVideoScriptsReq {
    private 'script_name'?: string;
    private 'script_description'?: string;
    private 'video_making_type'?: UpdateVideoScriptsReqVideoMakingTypeEnum | string;
    private 'human_image'?: string;
    private 'model_asset_id'?: string;
    private 'model_asset_type'?: UpdateVideoScriptsReqModelAssetTypeEnum | string;
    private 'scene_asset_id'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'video_config'?: VideoConfig;
    private 'shoot_scripts'?: Array<ShootScriptItem>;
    private 'priv_data'?: string;
    private 'background_music_config'?: BackgroundMusicConfig;
    public constructor() { 
    }
    public withScriptName(scriptName: string): UpdateVideoScriptsReq {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withScriptDescription(scriptDescription: string): UpdateVideoScriptsReq {
        this['script_description'] = scriptDescription;
        return this;
    }
    public set scriptDescription(scriptDescription: string  | undefined) {
        this['script_description'] = scriptDescription;
    }
    public get scriptDescription(): string | undefined {
        return this['script_description'];
    }
    public withVideoMakingType(videoMakingType: UpdateVideoScriptsReqVideoMakingTypeEnum | string): UpdateVideoScriptsReq {
        this['video_making_type'] = videoMakingType;
        return this;
    }
    public set videoMakingType(videoMakingType: UpdateVideoScriptsReqVideoMakingTypeEnum | string  | undefined) {
        this['video_making_type'] = videoMakingType;
    }
    public get videoMakingType(): UpdateVideoScriptsReqVideoMakingTypeEnum | string | undefined {
        return this['video_making_type'];
    }
    public withHumanImage(humanImage: string): UpdateVideoScriptsReq {
        this['human_image'] = humanImage;
        return this;
    }
    public set humanImage(humanImage: string  | undefined) {
        this['human_image'] = humanImage;
    }
    public get humanImage(): string | undefined {
        return this['human_image'];
    }
    public withModelAssetId(modelAssetId: string): UpdateVideoScriptsReq {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withModelAssetType(modelAssetType: UpdateVideoScriptsReqModelAssetTypeEnum | string): UpdateVideoScriptsReq {
        this['model_asset_type'] = modelAssetType;
        return this;
    }
    public set modelAssetType(modelAssetType: UpdateVideoScriptsReqModelAssetTypeEnum | string  | undefined) {
        this['model_asset_type'] = modelAssetType;
    }
    public get modelAssetType(): UpdateVideoScriptsReqModelAssetTypeEnum | string | undefined {
        return this['model_asset_type'];
    }
    public withSceneAssetId(sceneAssetId: string): UpdateVideoScriptsReq {
        this['scene_asset_id'] = sceneAssetId;
        return this;
    }
    public set sceneAssetId(sceneAssetId: string  | undefined) {
        this['scene_asset_id'] = sceneAssetId;
    }
    public get sceneAssetId(): string | undefined {
        return this['scene_asset_id'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): UpdateVideoScriptsReq {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withVideoConfig(videoConfig: VideoConfig): UpdateVideoScriptsReq {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withShootScripts(shootScripts: Array<ShootScriptItem>): UpdateVideoScriptsReq {
        this['shoot_scripts'] = shootScripts;
        return this;
    }
    public set shootScripts(shootScripts: Array<ShootScriptItem>  | undefined) {
        this['shoot_scripts'] = shootScripts;
    }
    public get shootScripts(): Array<ShootScriptItem> | undefined {
        return this['shoot_scripts'];
    }
    public withPrivData(privData: string): UpdateVideoScriptsReq {
        this['priv_data'] = privData;
        return this;
    }
    public set privData(privData: string  | undefined) {
        this['priv_data'] = privData;
    }
    public get privData(): string | undefined {
        return this['priv_data'];
    }
    public withBackgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig): UpdateVideoScriptsReq {
        this['background_music_config'] = backgroundMusicConfig;
        return this;
    }
    public set backgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig  | undefined) {
        this['background_music_config'] = backgroundMusicConfig;
    }
    public get backgroundMusicConfig(): BackgroundMusicConfig | undefined {
        return this['background_music_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateVideoScriptsReqVideoMakingTypeEnum {
    MODEL = 'MODEL',
    PICTURE = 'PICTURE'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateVideoScriptsReqModelAssetTypeEnum {
    HUMAN_MODEL_2D = 'HUMAN_MODEL_2D',
    HUMAN_MODEL_3D = 'HUMAN_MODEL_3D'
}

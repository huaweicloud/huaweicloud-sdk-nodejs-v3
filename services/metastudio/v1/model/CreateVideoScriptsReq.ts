import { BackgroundMusicConfig } from './BackgroundMusicConfig';
import { ShootScriptItem } from './ShootScriptItem';
import { VideoConfig } from './VideoConfig';
import { VoiceConfig } from './VoiceConfig';


export class CreateVideoScriptsReq {
    private 'script_name'?: string;
    private 'script_description'?: string;
    private 'video_making_type'?: CreateVideoScriptsReqVideoMakingTypeEnum | string;
    private 'model_asset_id'?: string;
    private 'model_asset_type'?: CreateVideoScriptsReqModelAssetTypeEnum | string;
    private 'human_image'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'video_config'?: VideoConfig;
    private 'scene_asset_id'?: string;
    private 'shoot_scripts'?: Array<ShootScriptItem>;
    private 'priv_data'?: string;
    private 'background_music_config'?: BackgroundMusicConfig;
    public constructor(scriptName?: string, voiceConfig?: VoiceConfig, shootScripts?: Array<ShootScriptItem>) { 
        this['script_name'] = scriptName;
        this['voice_config'] = voiceConfig;
        this['shoot_scripts'] = shootScripts;
    }
    public withScriptName(scriptName: string): CreateVideoScriptsReq {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withScriptDescription(scriptDescription: string): CreateVideoScriptsReq {
        this['script_description'] = scriptDescription;
        return this;
    }
    public set scriptDescription(scriptDescription: string  | undefined) {
        this['script_description'] = scriptDescription;
    }
    public get scriptDescription(): string | undefined {
        return this['script_description'];
    }
    public withVideoMakingType(videoMakingType: CreateVideoScriptsReqVideoMakingTypeEnum | string): CreateVideoScriptsReq {
        this['video_making_type'] = videoMakingType;
        return this;
    }
    public set videoMakingType(videoMakingType: CreateVideoScriptsReqVideoMakingTypeEnum | string  | undefined) {
        this['video_making_type'] = videoMakingType;
    }
    public get videoMakingType(): CreateVideoScriptsReqVideoMakingTypeEnum | string | undefined {
        return this['video_making_type'];
    }
    public withModelAssetId(modelAssetId: string): CreateVideoScriptsReq {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withModelAssetType(modelAssetType: CreateVideoScriptsReqModelAssetTypeEnum | string): CreateVideoScriptsReq {
        this['model_asset_type'] = modelAssetType;
        return this;
    }
    public set modelAssetType(modelAssetType: CreateVideoScriptsReqModelAssetTypeEnum | string  | undefined) {
        this['model_asset_type'] = modelAssetType;
    }
    public get modelAssetType(): CreateVideoScriptsReqModelAssetTypeEnum | string | undefined {
        return this['model_asset_type'];
    }
    public withHumanImage(humanImage: string): CreateVideoScriptsReq {
        this['human_image'] = humanImage;
        return this;
    }
    public set humanImage(humanImage: string  | undefined) {
        this['human_image'] = humanImage;
    }
    public get humanImage(): string | undefined {
        return this['human_image'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): CreateVideoScriptsReq {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withVideoConfig(videoConfig: VideoConfig): CreateVideoScriptsReq {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withSceneAssetId(sceneAssetId: string): CreateVideoScriptsReq {
        this['scene_asset_id'] = sceneAssetId;
        return this;
    }
    public set sceneAssetId(sceneAssetId: string  | undefined) {
        this['scene_asset_id'] = sceneAssetId;
    }
    public get sceneAssetId(): string | undefined {
        return this['scene_asset_id'];
    }
    public withShootScripts(shootScripts: Array<ShootScriptItem>): CreateVideoScriptsReq {
        this['shoot_scripts'] = shootScripts;
        return this;
    }
    public set shootScripts(shootScripts: Array<ShootScriptItem>  | undefined) {
        this['shoot_scripts'] = shootScripts;
    }
    public get shootScripts(): Array<ShootScriptItem> | undefined {
        return this['shoot_scripts'];
    }
    public withPrivData(privData: string): CreateVideoScriptsReq {
        this['priv_data'] = privData;
        return this;
    }
    public set privData(privData: string  | undefined) {
        this['priv_data'] = privData;
    }
    public get privData(): string | undefined {
        return this['priv_data'];
    }
    public withBackgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig): CreateVideoScriptsReq {
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
export enum CreateVideoScriptsReqVideoMakingTypeEnum {
    MODEL = 'MODEL',
    PICTURE = 'PICTURE'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateVideoScriptsReqModelAssetTypeEnum {
    HUMAN_MODEL_2D = 'HUMAN_MODEL_2D',
    HUMAN_MODEL_3D = 'HUMAN_MODEL_3D'
}

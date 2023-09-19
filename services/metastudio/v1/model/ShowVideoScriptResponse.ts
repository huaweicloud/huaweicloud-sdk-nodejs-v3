import { BackgroundMusicConfig } from './BackgroundMusicConfig';
import { CreateVideoScriptsReq } from './CreateVideoScriptsReq';
import { ShootScriptAudioFiles } from './ShootScriptAudioFiles';
import { ShootScriptItem } from './ShootScriptItem';
import { VideoConfig } from './VideoConfig';
import { VoiceConfig } from './VoiceConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVideoScriptResponse extends SdkResponse {
    private 'script_name'?: string;
    private 'script_description'?: string;
    private 'video_making_type'?: ShowVideoScriptResponseVideoMakingTypeEnum | string;
    private 'model_asset_id'?: string;
    private 'model_asset_type'?: ShowVideoScriptResponseModelAssetTypeEnum | string;
    private 'human_image'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'video_config'?: VideoConfig;
    private 'scene_asset_id'?: string;
    private 'shoot_scripts'?: Array<ShootScriptItem>;
    private 'priv_data'?: string;
    private 'background_music_config'?: BackgroundMusicConfig;
    private 'script_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'audio_files'?: ShootScriptAudioFiles;
    private 'X-Request-Id'?: string;
    public constructor(scriptName?: string, voiceConfig?: VoiceConfig, shootScripts?: Array<ShootScriptItem>) { 
        super();
        this['script_name'] = scriptName;
        this['voice_config'] = voiceConfig;
        this['shoot_scripts'] = shootScripts;
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
    public withVideoMakingType(videoMakingType: ShowVideoScriptResponseVideoMakingTypeEnum | string): ShowVideoScriptResponse {
        this['video_making_type'] = videoMakingType;
        return this;
    }
    public set videoMakingType(videoMakingType: ShowVideoScriptResponseVideoMakingTypeEnum | string  | undefined) {
        this['video_making_type'] = videoMakingType;
    }
    public get videoMakingType(): ShowVideoScriptResponseVideoMakingTypeEnum | string | undefined {
        return this['video_making_type'];
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
    public withHumanImage(humanImage: string): ShowVideoScriptResponse {
        this['human_image'] = humanImage;
        return this;
    }
    public set humanImage(humanImage: string  | undefined) {
        this['human_image'] = humanImage;
    }
    public get humanImage(): string | undefined {
        return this['human_image'];
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
    public withShootScripts(shootScripts: Array<ShootScriptItem>): ShowVideoScriptResponse {
        this['shoot_scripts'] = shootScripts;
        return this;
    }
    public set shootScripts(shootScripts: Array<ShootScriptItem>  | undefined) {
        this['shoot_scripts'] = shootScripts;
    }
    public get shootScripts(): Array<ShootScriptItem> | undefined {
        return this['shoot_scripts'];
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
export enum ShowVideoScriptResponseVideoMakingTypeEnum {
    MODEL = 'MODEL',
    PICTURE = 'PICTURE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowVideoScriptResponseModelAssetTypeEnum {
    HUMAN_MODEL_2D = 'HUMAN_MODEL_2D',
    HUMAN_MODEL_3D = 'HUMAN_MODEL_3D'
}

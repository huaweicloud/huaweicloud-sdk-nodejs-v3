import { BackgroundMusicConfig } from './BackgroundMusicConfig';
import { OutputAssetConfig } from './OutputAssetConfig';
import { ShootScriptItem } from './ShootScriptItem';
import { VideoConfig } from './VideoConfig';
import { VoiceConfig } from './VoiceConfig';


export class Create2DDigitalHumanVideoReq {
    private 'script_id'?: string;
    private 'video_making_type'?: Create2DDigitalHumanVideoReqVideoMakingTypeEnum | string;
    private 'model_asset_id'?: string;
    private 'human_image'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'video_config'?: VideoConfig;
    private 'shoot_scripts'?: Array<ShootScriptItem>;
    private 'output_asset_config'?: OutputAssetConfig;
    private 'background_music_config'?: BackgroundMusicConfig;
    public constructor() { 
    }
    public withScriptId(scriptId: string): Create2DDigitalHumanVideoReq {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withVideoMakingType(videoMakingType: Create2DDigitalHumanVideoReqVideoMakingTypeEnum | string): Create2DDigitalHumanVideoReq {
        this['video_making_type'] = videoMakingType;
        return this;
    }
    public set videoMakingType(videoMakingType: Create2DDigitalHumanVideoReqVideoMakingTypeEnum | string  | undefined) {
        this['video_making_type'] = videoMakingType;
    }
    public get videoMakingType(): Create2DDigitalHumanVideoReqVideoMakingTypeEnum | string | undefined {
        return this['video_making_type'];
    }
    public withModelAssetId(modelAssetId: string): Create2DDigitalHumanVideoReq {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withHumanImage(humanImage: string): Create2DDigitalHumanVideoReq {
        this['human_image'] = humanImage;
        return this;
    }
    public set humanImage(humanImage: string  | undefined) {
        this['human_image'] = humanImage;
    }
    public get humanImage(): string | undefined {
        return this['human_image'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): Create2DDigitalHumanVideoReq {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withVideoConfig(videoConfig: VideoConfig): Create2DDigitalHumanVideoReq {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withShootScripts(shootScripts: Array<ShootScriptItem>): Create2DDigitalHumanVideoReq {
        this['shoot_scripts'] = shootScripts;
        return this;
    }
    public set shootScripts(shootScripts: Array<ShootScriptItem>  | undefined) {
        this['shoot_scripts'] = shootScripts;
    }
    public get shootScripts(): Array<ShootScriptItem> | undefined {
        return this['shoot_scripts'];
    }
    public withOutputAssetConfig(outputAssetConfig: OutputAssetConfig): Create2DDigitalHumanVideoReq {
        this['output_asset_config'] = outputAssetConfig;
        return this;
    }
    public set outputAssetConfig(outputAssetConfig: OutputAssetConfig  | undefined) {
        this['output_asset_config'] = outputAssetConfig;
    }
    public get outputAssetConfig(): OutputAssetConfig | undefined {
        return this['output_asset_config'];
    }
    public withBackgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig): Create2DDigitalHumanVideoReq {
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
export enum Create2DDigitalHumanVideoReqVideoMakingTypeEnum {
    MODEL = 'MODEL',
    PICTURE = 'PICTURE'
}

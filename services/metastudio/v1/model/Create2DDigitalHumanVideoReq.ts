import { BackgroundMusicConfig } from './BackgroundMusicConfig';
import { CallBackConfig } from './CallBackConfig';
import { OutputAssetConfig } from './OutputAssetConfig';
import { ReviewConfig } from './ReviewConfig';
import { ShootScriptItem } from './ShootScriptItem';
import { VideoConfig } from './VideoConfig';
import { VoiceConfig } from './VoiceConfig';


export class Create2DDigitalHumanVideoReq {
    private 'script_id'?: string;
    private 'model_asset_id'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'video_config'?: VideoConfig;
    private 'shoot_scripts'?: Array<ShootScriptItem>;
    private 'output_asset_config'?: OutputAssetConfig;
    private 'background_music_config'?: BackgroundMusicConfig;
    private 'review_config'?: ReviewConfig;
    private 'callback_config'?: CallBackConfig;
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
    public withReviewConfig(reviewConfig: ReviewConfig): Create2DDigitalHumanVideoReq {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withCallbackConfig(callbackConfig: CallBackConfig): Create2DDigitalHumanVideoReq {
        this['callback_config'] = callbackConfig;
        return this;
    }
    public set callbackConfig(callbackConfig: CallBackConfig  | undefined) {
        this['callback_config'] = callbackConfig;
    }
    public get callbackConfig(): CallBackConfig | undefined {
        return this['callback_config'];
    }
}
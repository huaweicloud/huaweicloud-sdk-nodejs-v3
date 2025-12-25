import { BackgroundMusicConfig } from './BackgroundMusicConfig';
import { CallBackConfig } from './CallBackConfig';
import { OutputAssetConfig } from './OutputAssetConfig';
import { PhotoVideoConfig } from './PhotoVideoConfig';
import { ReviewConfig } from './ReviewConfig';
import { ShootScriptItem } from './ShootScriptItem';
import { VoiceConfig } from './VoiceConfig';


export class CreatePhotoDigitalHumanVideoReq {
    private 'script_id'?: string;
    private 'human_image'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'video_config'?: PhotoVideoConfig;
    private 'shoot_scripts'?: Array<ShootScriptItem>;
    private 'output_asset_config'?: OutputAssetConfig;
    private 'background_music_config'?: BackgroundMusicConfig;
    private 'review_config'?: ReviewConfig;
    private 'callback_config'?: CallBackConfig;
    private 'id_card_image1'?: string;
    private 'id_card_image2'?: string;
    private 'authorize_use_human_image'?: boolean;
    public constructor(humanImage?: string, shootScripts?: Array<ShootScriptItem>, outputAssetConfig?: OutputAssetConfig) { 
        this['human_image'] = humanImage;
        this['shoot_scripts'] = shootScripts;
        this['output_asset_config'] = outputAssetConfig;
    }
    public withScriptId(scriptId: string): CreatePhotoDigitalHumanVideoReq {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withHumanImage(humanImage: string): CreatePhotoDigitalHumanVideoReq {
        this['human_image'] = humanImage;
        return this;
    }
    public set humanImage(humanImage: string  | undefined) {
        this['human_image'] = humanImage;
    }
    public get humanImage(): string | undefined {
        return this['human_image'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): CreatePhotoDigitalHumanVideoReq {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withVideoConfig(videoConfig: PhotoVideoConfig): CreatePhotoDigitalHumanVideoReq {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: PhotoVideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): PhotoVideoConfig | undefined {
        return this['video_config'];
    }
    public withShootScripts(shootScripts: Array<ShootScriptItem>): CreatePhotoDigitalHumanVideoReq {
        this['shoot_scripts'] = shootScripts;
        return this;
    }
    public set shootScripts(shootScripts: Array<ShootScriptItem>  | undefined) {
        this['shoot_scripts'] = shootScripts;
    }
    public get shootScripts(): Array<ShootScriptItem> | undefined {
        return this['shoot_scripts'];
    }
    public withOutputAssetConfig(outputAssetConfig: OutputAssetConfig): CreatePhotoDigitalHumanVideoReq {
        this['output_asset_config'] = outputAssetConfig;
        return this;
    }
    public set outputAssetConfig(outputAssetConfig: OutputAssetConfig  | undefined) {
        this['output_asset_config'] = outputAssetConfig;
    }
    public get outputAssetConfig(): OutputAssetConfig | undefined {
        return this['output_asset_config'];
    }
    public withBackgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig): CreatePhotoDigitalHumanVideoReq {
        this['background_music_config'] = backgroundMusicConfig;
        return this;
    }
    public set backgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig  | undefined) {
        this['background_music_config'] = backgroundMusicConfig;
    }
    public get backgroundMusicConfig(): BackgroundMusicConfig | undefined {
        return this['background_music_config'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): CreatePhotoDigitalHumanVideoReq {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withCallbackConfig(callbackConfig: CallBackConfig): CreatePhotoDigitalHumanVideoReq {
        this['callback_config'] = callbackConfig;
        return this;
    }
    public set callbackConfig(callbackConfig: CallBackConfig  | undefined) {
        this['callback_config'] = callbackConfig;
    }
    public get callbackConfig(): CallBackConfig | undefined {
        return this['callback_config'];
    }
    public withIdCardImage1(idCardImage1: string): CreatePhotoDigitalHumanVideoReq {
        this['id_card_image1'] = idCardImage1;
        return this;
    }
    public set idCardImage1(idCardImage1: string  | undefined) {
        this['id_card_image1'] = idCardImage1;
    }
    public get idCardImage1(): string | undefined {
        return this['id_card_image1'];
    }
    public withIdCardImage2(idCardImage2: string): CreatePhotoDigitalHumanVideoReq {
        this['id_card_image2'] = idCardImage2;
        return this;
    }
    public set idCardImage2(idCardImage2: string  | undefined) {
        this['id_card_image2'] = idCardImage2;
    }
    public get idCardImage2(): string | undefined {
        return this['id_card_image2'];
    }
    public withAuthorizeUseHumanImage(authorizeUseHumanImage: boolean): CreatePhotoDigitalHumanVideoReq {
        this['authorize_use_human_image'] = authorizeUseHumanImage;
        return this;
    }
    public set authorizeUseHumanImage(authorizeUseHumanImage: boolean  | undefined) {
        this['authorize_use_human_image'] = authorizeUseHumanImage;
    }
    public get authorizeUseHumanImage(): boolean | undefined {
        return this['authorize_use_human_image'];
    }
}
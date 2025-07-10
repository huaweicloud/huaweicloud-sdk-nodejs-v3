import { AudioAssetMeta } from './AudioAssetMeta';
import { HumanModel2DAssetMeta } from './HumanModel2DAssetMeta';
import { ImageAssetMeta } from './ImageAssetMeta';
import { MaterialAssetMeta } from './MaterialAssetMeta';
import { PPTAssetMeta } from './PPTAssetMeta';
import { VideoAssetMeta } from './VideoAssetMeta';
import { VoiceModelAssetMeta } from './VoiceModelAssetMeta';


export class AssetExtraMeta {
    private 'voice_model_meta'?: VoiceModelAssetMeta;
    private 'ppt_meta'?: PPTAssetMeta;
    private 'material_meta'?: MaterialAssetMeta;
    private 'human_model_2d_meta'?: HumanModel2DAssetMeta;
    private 'image_meta'?: ImageAssetMeta;
    private 'video_meta'?: VideoAssetMeta;
    private 'audio_meta'?: AudioAssetMeta;
    public constructor() { 
    }
    public withVoiceModelMeta(voiceModelMeta: VoiceModelAssetMeta): AssetExtraMeta {
        this['voice_model_meta'] = voiceModelMeta;
        return this;
    }
    public set voiceModelMeta(voiceModelMeta: VoiceModelAssetMeta  | undefined) {
        this['voice_model_meta'] = voiceModelMeta;
    }
    public get voiceModelMeta(): VoiceModelAssetMeta | undefined {
        return this['voice_model_meta'];
    }
    public withPptMeta(pptMeta: PPTAssetMeta): AssetExtraMeta {
        this['ppt_meta'] = pptMeta;
        return this;
    }
    public set pptMeta(pptMeta: PPTAssetMeta  | undefined) {
        this['ppt_meta'] = pptMeta;
    }
    public get pptMeta(): PPTAssetMeta | undefined {
        return this['ppt_meta'];
    }
    public withMaterialMeta(materialMeta: MaterialAssetMeta): AssetExtraMeta {
        this['material_meta'] = materialMeta;
        return this;
    }
    public set materialMeta(materialMeta: MaterialAssetMeta  | undefined) {
        this['material_meta'] = materialMeta;
    }
    public get materialMeta(): MaterialAssetMeta | undefined {
        return this['material_meta'];
    }
    public withHumanModel2dMeta(humanModel2dMeta: HumanModel2DAssetMeta): AssetExtraMeta {
        this['human_model_2d_meta'] = humanModel2dMeta;
        return this;
    }
    public set humanModel2dMeta(humanModel2dMeta: HumanModel2DAssetMeta  | undefined) {
        this['human_model_2d_meta'] = humanModel2dMeta;
    }
    public get humanModel2dMeta(): HumanModel2DAssetMeta | undefined {
        return this['human_model_2d_meta'];
    }
    public withImageMeta(imageMeta: ImageAssetMeta): AssetExtraMeta {
        this['image_meta'] = imageMeta;
        return this;
    }
    public set imageMeta(imageMeta: ImageAssetMeta  | undefined) {
        this['image_meta'] = imageMeta;
    }
    public get imageMeta(): ImageAssetMeta | undefined {
        return this['image_meta'];
    }
    public withVideoMeta(videoMeta: VideoAssetMeta): AssetExtraMeta {
        this['video_meta'] = videoMeta;
        return this;
    }
    public set videoMeta(videoMeta: VideoAssetMeta  | undefined) {
        this['video_meta'] = videoMeta;
    }
    public get videoMeta(): VideoAssetMeta | undefined {
        return this['video_meta'];
    }
    public withAudioMeta(audioMeta: AudioAssetMeta): AssetExtraMeta {
        this['audio_meta'] = audioMeta;
        return this;
    }
    public set audioMeta(audioMeta: AudioAssetMeta  | undefined) {
        this['audio_meta'] = audioMeta;
    }
    public get audioMeta(): AudioAssetMeta | undefined {
        return this['audio_meta'];
    }
}
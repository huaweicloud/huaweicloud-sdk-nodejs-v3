import { AnimationAssetMeta } from './AnimationAssetMeta';
import { HumanModel2DAssetMeta } from './HumanModel2DAssetMeta';
import { HumanModelAssetMeta } from './HumanModelAssetMeta';
import { MaterialAssetMeta } from './MaterialAssetMeta';
import { PPTAssetMeta } from './PPTAssetMeta';
import { SceneAssetMeta } from './SceneAssetMeta';
import { VoiceModelAssetMeta } from './VoiceModelAssetMeta';


export class AssetExtraMeta {
    private 'human_model_meta'?: HumanModelAssetMeta;
    private 'voice_model_meta'?: VoiceModelAssetMeta;
    private 'ppt_meta'?: PPTAssetMeta;
    private 'animation_meta'?: AnimationAssetMeta;
    private 'scene_meta'?: SceneAssetMeta;
    private 'material_meta'?: MaterialAssetMeta;
    private 'human_model_2d_meta'?: HumanModel2DAssetMeta;
    public constructor() { 
    }
    public withHumanModelMeta(humanModelMeta: HumanModelAssetMeta): AssetExtraMeta {
        this['human_model_meta'] = humanModelMeta;
        return this;
    }
    public set humanModelMeta(humanModelMeta: HumanModelAssetMeta  | undefined) {
        this['human_model_meta'] = humanModelMeta;
    }
    public get humanModelMeta(): HumanModelAssetMeta | undefined {
        return this['human_model_meta'];
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
    public withAnimationMeta(animationMeta: AnimationAssetMeta): AssetExtraMeta {
        this['animation_meta'] = animationMeta;
        return this;
    }
    public set animationMeta(animationMeta: AnimationAssetMeta  | undefined) {
        this['animation_meta'] = animationMeta;
    }
    public get animationMeta(): AnimationAssetMeta | undefined {
        return this['animation_meta'];
    }
    public withSceneMeta(sceneMeta: SceneAssetMeta): AssetExtraMeta {
        this['scene_meta'] = sceneMeta;
        return this;
    }
    public set sceneMeta(sceneMeta: SceneAssetMeta  | undefined) {
        this['scene_meta'] = sceneMeta;
    }
    public get sceneMeta(): SceneAssetMeta | undefined {
        return this['scene_meta'];
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
}
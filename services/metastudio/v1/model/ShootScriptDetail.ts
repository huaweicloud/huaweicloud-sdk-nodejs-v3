import { AnimationConfig } from './AnimationConfig';
import { BackgroundConfigInfo } from './BackgroundConfigInfo';
import { EmotionConfig } from './EmotionConfig';
import { LayerConfig } from './LayerConfig';
import { ShootScript } from './ShootScript';
import { TextConfig } from './TextConfig';


export class ShootScriptDetail {
    private 'script_type'?: ShootScriptDetailScriptTypeEnum | string;
    private 'text_config'?: TextConfig;
    private 'animation_config'?: Array<AnimationConfig>;
    private 'background_config'?: Array<BackgroundConfigInfo>;
    private 'emotion_config'?: Array<EmotionConfig>;
    private 'layer_config'?: Array<LayerConfig>;
    private 'thumbnail_url'?: string;
    public constructor() { 
    }
    public withScriptType(scriptType: ShootScriptDetailScriptTypeEnum | string): ShootScriptDetail {
        this['script_type'] = scriptType;
        return this;
    }
    public set scriptType(scriptType: ShootScriptDetailScriptTypeEnum | string  | undefined) {
        this['script_type'] = scriptType;
    }
    public get scriptType(): ShootScriptDetailScriptTypeEnum | string | undefined {
        return this['script_type'];
    }
    public withTextConfig(textConfig: TextConfig): ShootScriptDetail {
        this['text_config'] = textConfig;
        return this;
    }
    public set textConfig(textConfig: TextConfig  | undefined) {
        this['text_config'] = textConfig;
    }
    public get textConfig(): TextConfig | undefined {
        return this['text_config'];
    }
    public withAnimationConfig(animationConfig: Array<AnimationConfig>): ShootScriptDetail {
        this['animation_config'] = animationConfig;
        return this;
    }
    public set animationConfig(animationConfig: Array<AnimationConfig>  | undefined) {
        this['animation_config'] = animationConfig;
    }
    public get animationConfig(): Array<AnimationConfig> | undefined {
        return this['animation_config'];
    }
    public withBackgroundConfig(backgroundConfig: Array<BackgroundConfigInfo>): ShootScriptDetail {
        this['background_config'] = backgroundConfig;
        return this;
    }
    public set backgroundConfig(backgroundConfig: Array<BackgroundConfigInfo>  | undefined) {
        this['background_config'] = backgroundConfig;
    }
    public get backgroundConfig(): Array<BackgroundConfigInfo> | undefined {
        return this['background_config'];
    }
    public withEmotionConfig(emotionConfig: Array<EmotionConfig>): ShootScriptDetail {
        this['emotion_config'] = emotionConfig;
        return this;
    }
    public set emotionConfig(emotionConfig: Array<EmotionConfig>  | undefined) {
        this['emotion_config'] = emotionConfig;
    }
    public get emotionConfig(): Array<EmotionConfig> | undefined {
        return this['emotion_config'];
    }
    public withLayerConfig(layerConfig: Array<LayerConfig>): ShootScriptDetail {
        this['layer_config'] = layerConfig;
        return this;
    }
    public set layerConfig(layerConfig: Array<LayerConfig>  | undefined) {
        this['layer_config'] = layerConfig;
    }
    public get layerConfig(): Array<LayerConfig> | undefined {
        return this['layer_config'];
    }
    public withThumbnailUrl(thumbnailUrl: string): ShootScriptDetail {
        this['thumbnail_url'] = thumbnailUrl;
        return this;
    }
    public set thumbnailUrl(thumbnailUrl: string  | undefined) {
        this['thumbnail_url'] = thumbnailUrl;
    }
    public get thumbnailUrl(): string | undefined {
        return this['thumbnail_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShootScriptDetailScriptTypeEnum {
    TEXT = 'TEXT',
    AUDIO = 'AUDIO'
}

import { ImageLayerConfig } from './ImageLayerConfig';
import { LayerPositionConfig } from './LayerPositionConfig';
import { LayerSizeConfig } from './LayerSizeConfig';
import { TextLayerConfig } from './TextLayerConfig';
import { VideoLayerConfig } from './VideoLayerConfig';


export class LayerConfig {
    private 'layer_type'?: LayerConfigLayerTypeEnum | string;
    private 'group_id'?: string;
    public position?: LayerPositionConfig;
    public size?: LayerSizeConfig;
    private 'image_config'?: ImageLayerConfig;
    private 'video_config'?: VideoLayerConfig;
    private 'text_config'?: TextLayerConfig;
    public constructor(layerType?: string, position?: LayerPositionConfig) { 
        this['layer_type'] = layerType;
        this['position'] = position;
    }
    public withLayerType(layerType: LayerConfigLayerTypeEnum | string): LayerConfig {
        this['layer_type'] = layerType;
        return this;
    }
    public set layerType(layerType: LayerConfigLayerTypeEnum | string  | undefined) {
        this['layer_type'] = layerType;
    }
    public get layerType(): LayerConfigLayerTypeEnum | string | undefined {
        return this['layer_type'];
    }
    public withGroupId(groupId: string): LayerConfig {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withPosition(position: LayerPositionConfig): LayerConfig {
        this['position'] = position;
        return this;
    }
    public withSize(size: LayerSizeConfig): LayerConfig {
        this['size'] = size;
        return this;
    }
    public withImageConfig(imageConfig: ImageLayerConfig): LayerConfig {
        this['image_config'] = imageConfig;
        return this;
    }
    public set imageConfig(imageConfig: ImageLayerConfig  | undefined) {
        this['image_config'] = imageConfig;
    }
    public get imageConfig(): ImageLayerConfig | undefined {
        return this['image_config'];
    }
    public withVideoConfig(videoConfig: VideoLayerConfig): LayerConfig {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoLayerConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoLayerConfig | undefined {
        return this['video_config'];
    }
    public withTextConfig(textConfig: TextLayerConfig): LayerConfig {
        this['text_config'] = textConfig;
        return this;
    }
    public set textConfig(textConfig: TextLayerConfig  | undefined) {
        this['text_config'] = textConfig;
    }
    public get textConfig(): TextLayerConfig | undefined {
        return this['text_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LayerConfigLayerTypeEnum {
    HUMAN = 'HUMAN',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    TEXT = 'TEXT'
}

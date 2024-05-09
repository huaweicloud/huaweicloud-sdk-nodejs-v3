import { LayerPositionConfig } from './LayerPositionConfig';
import { LayerSizeConfig } from './LayerSizeConfig';
import { SmartImageLayerConfig } from './SmartImageLayerConfig';
import { SmartTextLayerConfig } from './SmartTextLayerConfig';
import { SmartVideoLayerConfig } from './SmartVideoLayerConfig';


export class SmartLayerConfig {
    private 'layer_type'?: SmartLayerConfigLayerTypeEnum | string;
    private 'asset_id'?: string;
    public position?: LayerPositionConfig;
    public size?: LayerSizeConfig;
    private 'image_config'?: SmartImageLayerConfig;
    private 'video_config'?: SmartVideoLayerConfig;
    private 'text_config'?: SmartTextLayerConfig;
    public constructor(layerType?: string, position?: LayerPositionConfig) { 
        this['layer_type'] = layerType;
        this['position'] = position;
    }
    public withLayerType(layerType: SmartLayerConfigLayerTypeEnum | string): SmartLayerConfig {
        this['layer_type'] = layerType;
        return this;
    }
    public set layerType(layerType: SmartLayerConfigLayerTypeEnum | string  | undefined) {
        this['layer_type'] = layerType;
    }
    public get layerType(): SmartLayerConfigLayerTypeEnum | string | undefined {
        return this['layer_type'];
    }
    public withAssetId(assetId: string): SmartLayerConfig {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withPosition(position: LayerPositionConfig): SmartLayerConfig {
        this['position'] = position;
        return this;
    }
    public withSize(size: LayerSizeConfig): SmartLayerConfig {
        this['size'] = size;
        return this;
    }
    public withImageConfig(imageConfig: SmartImageLayerConfig): SmartLayerConfig {
        this['image_config'] = imageConfig;
        return this;
    }
    public set imageConfig(imageConfig: SmartImageLayerConfig  | undefined) {
        this['image_config'] = imageConfig;
    }
    public get imageConfig(): SmartImageLayerConfig | undefined {
        return this['image_config'];
    }
    public withVideoConfig(videoConfig: SmartVideoLayerConfig): SmartLayerConfig {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: SmartVideoLayerConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): SmartVideoLayerConfig | undefined {
        return this['video_config'];
    }
    public withTextConfig(textConfig: SmartTextLayerConfig): SmartLayerConfig {
        this['text_config'] = textConfig;
        return this;
    }
    public set textConfig(textConfig: SmartTextLayerConfig  | undefined) {
        this['text_config'] = textConfig;
    }
    public get textConfig(): SmartTextLayerConfig | undefined {
        return this['text_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SmartLayerConfigLayerTypeEnum {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    TEXT = 'TEXT'
}

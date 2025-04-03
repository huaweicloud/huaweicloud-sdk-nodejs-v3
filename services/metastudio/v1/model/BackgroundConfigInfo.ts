import { BackgroundImageConfig } from './BackgroundImageConfig';


export class BackgroundConfigInfo {
    private 'background_type'?: BackgroundConfigInfoBackgroundTypeEnum | string;
    private 'background_config'?: string;
    private 'background_color_config'?: string;
    private 'background_asset_id'?: string;
    private 'background_image_config'?: BackgroundImageConfig;
    public constructor(backgroundType?: string) { 
        this['background_type'] = backgroundType;
    }
    public withBackgroundType(backgroundType: BackgroundConfigInfoBackgroundTypeEnum | string): BackgroundConfigInfo {
        this['background_type'] = backgroundType;
        return this;
    }
    public set backgroundType(backgroundType: BackgroundConfigInfoBackgroundTypeEnum | string  | undefined) {
        this['background_type'] = backgroundType;
    }
    public get backgroundType(): BackgroundConfigInfoBackgroundTypeEnum | string | undefined {
        return this['background_type'];
    }
    public withBackgroundConfig(backgroundConfig: string): BackgroundConfigInfo {
        this['background_config'] = backgroundConfig;
        return this;
    }
    public set backgroundConfig(backgroundConfig: string  | undefined) {
        this['background_config'] = backgroundConfig;
    }
    public get backgroundConfig(): string | undefined {
        return this['background_config'];
    }
    public withBackgroundColorConfig(backgroundColorConfig: string): BackgroundConfigInfo {
        this['background_color_config'] = backgroundColorConfig;
        return this;
    }
    public set backgroundColorConfig(backgroundColorConfig: string  | undefined) {
        this['background_color_config'] = backgroundColorConfig;
    }
    public get backgroundColorConfig(): string | undefined {
        return this['background_color_config'];
    }
    public withBackgroundAssetId(backgroundAssetId: string): BackgroundConfigInfo {
        this['background_asset_id'] = backgroundAssetId;
        return this;
    }
    public set backgroundAssetId(backgroundAssetId: string  | undefined) {
        this['background_asset_id'] = backgroundAssetId;
    }
    public get backgroundAssetId(): string | undefined {
        return this['background_asset_id'];
    }
    public withBackgroundImageConfig(backgroundImageConfig: BackgroundImageConfig): BackgroundConfigInfo {
        this['background_image_config'] = backgroundImageConfig;
        return this;
    }
    public set backgroundImageConfig(backgroundImageConfig: BackgroundImageConfig  | undefined) {
        this['background_image_config'] = backgroundImageConfig;
    }
    public get backgroundImageConfig(): BackgroundImageConfig | undefined {
        return this['background_image_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackgroundConfigInfoBackgroundTypeEnum {
    IMAGE = 'IMAGE',
    COLOR = 'COLOR',
    IMAGE_2D = 'IMAGE_2D',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO'
}

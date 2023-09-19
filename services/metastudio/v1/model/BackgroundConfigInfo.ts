import { HumanPosition2D } from './HumanPosition2D';
import { HumanSize2D } from './HumanSize2D';


export class BackgroundConfigInfo {
    private 'background_type'?: BackgroundConfigInfoBackgroundTypeEnum | string;
    private 'background_title'?: string;
    private 'human_position_2d'?: HumanPosition2D;
    private 'human_size_2d'?: HumanSize2D;
    private 'background_cover_url'?: string;
    private 'background_config'?: string;
    private 'background_asset_id'?: string;
    public constructor(backgroundType?: string, backgroundConfig?: string) { 
        this['background_type'] = backgroundType;
        this['background_config'] = backgroundConfig;
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
    public withBackgroundTitle(backgroundTitle: string): BackgroundConfigInfo {
        this['background_title'] = backgroundTitle;
        return this;
    }
    public set backgroundTitle(backgroundTitle: string  | undefined) {
        this['background_title'] = backgroundTitle;
    }
    public get backgroundTitle(): string | undefined {
        return this['background_title'];
    }
    public withHumanPosition2d(humanPosition2d: HumanPosition2D): BackgroundConfigInfo {
        this['human_position_2d'] = humanPosition2d;
        return this;
    }
    public set humanPosition2d(humanPosition2d: HumanPosition2D  | undefined) {
        this['human_position_2d'] = humanPosition2d;
    }
    public get humanPosition2d(): HumanPosition2D | undefined {
        return this['human_position_2d'];
    }
    public withHumanSize2d(humanSize2d: HumanSize2D): BackgroundConfigInfo {
        this['human_size_2d'] = humanSize2d;
        return this;
    }
    public set humanSize2d(humanSize2d: HumanSize2D  | undefined) {
        this['human_size_2d'] = humanSize2d;
    }
    public get humanSize2d(): HumanSize2D | undefined {
        return this['human_size_2d'];
    }
    public withBackgroundCoverUrl(backgroundCoverUrl: string): BackgroundConfigInfo {
        this['background_cover_url'] = backgroundCoverUrl;
        return this;
    }
    public set backgroundCoverUrl(backgroundCoverUrl: string  | undefined) {
        this['background_cover_url'] = backgroundCoverUrl;
    }
    public get backgroundCoverUrl(): string | undefined {
        return this['background_cover_url'];
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
}

/**
    * @export
    * @enum {string}
    */
export enum BackgroundConfigInfoBackgroundTypeEnum {
    IMAGE = 'IMAGE',
    IMAGE_2D = 'IMAGE_2D',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO'
}

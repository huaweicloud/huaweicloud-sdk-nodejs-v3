

export class DigitalAssetSummary {
    private 'asset_id'?: string;
    private 'asset_name'?: string;
    private 'asset_type'?: DigitalAssetSummaryAssetTypeEnum | string;
    private 'cover_url'?: string;
    private 'thumbnail_url'?: string;
    public constructor() { 
    }
    public withAssetId(assetId: string): DigitalAssetSummary {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetName(assetName: string): DigitalAssetSummary {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetType(assetType: DigitalAssetSummaryAssetTypeEnum | string): DigitalAssetSummary {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: DigitalAssetSummaryAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): DigitalAssetSummaryAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withCoverUrl(coverUrl: string): DigitalAssetSummary {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withThumbnailUrl(thumbnailUrl: string): DigitalAssetSummary {
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
export enum DigitalAssetSummaryAssetTypeEnum {
    HUMAN_MODEL = 'HUMAN_MODEL',
    MODEL = 'MODEL',
    ANIMATION = 'ANIMATION',
    SCENE = 'SCENE',
    PPT = 'PPT',
    VIDEO = 'VIDEO',
    IMAGE = 'IMAGE',
    MATERIAL = 'MATERIAL',
    VOICE_MODEL = 'VOICE_MODEL',
    HUMAN_MODEL_2D = 'HUMAN_MODEL_2D',
    BUSINESS_CARD_TEMPLET = 'BUSINESS_CARD_TEMPLET',
    MUSIC = 'MUSIC',
    AUDIO = 'AUDIO'
}

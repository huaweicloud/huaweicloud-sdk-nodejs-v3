

export class StyleAssetItem {
    private 'asset_id'?: string;
    private 'asset_type'?: StyleAssetItemAssetTypeEnum | string;
    private 'cover_url'?: string;
    public constructor() { 
    }
    public withAssetId(assetId: string): StyleAssetItem {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetType(assetType: StyleAssetItemAssetTypeEnum | string): StyleAssetItem {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: StyleAssetItemAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): StyleAssetItemAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withCoverUrl(coverUrl: string): StyleAssetItem {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StyleAssetItemAssetTypeEnum {
    ANIMATION = 'ANIMATION',
    MATERIAL = 'MATERIAL'
}

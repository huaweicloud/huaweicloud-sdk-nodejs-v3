

export class ProductCoverDetailInfo {
    private 'asset_id'?: string;
    private 'cover_url'?: string;
    private 'thumbnail_url'?: string;
    public constructor() { 
    }
    public withAssetId(assetId: string): ProductCoverDetailInfo {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withCoverUrl(coverUrl: string): ProductCoverDetailInfo {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withThumbnailUrl(thumbnailUrl: string): ProductCoverDetailInfo {
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
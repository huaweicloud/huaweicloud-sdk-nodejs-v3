

export class UpdateAssetMetaReq {
    private 'asset_id'?: string;
    public title?: string;
    public description?: string;
    private 'category_id'?: number;
    public tags?: string;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: string): UpdateAssetMetaReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withTitle(title: string): UpdateAssetMetaReq {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): UpdateAssetMetaReq {
        this['description'] = description;
        return this;
    }
    public withCategoryId(categoryId: number): UpdateAssetMetaReq {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withTags(tags: string): UpdateAssetMetaReq {
        this['tags'] = tags;
        return this;
    }
}
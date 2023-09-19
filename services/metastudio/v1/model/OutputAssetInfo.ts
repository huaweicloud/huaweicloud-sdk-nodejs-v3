

export class OutputAssetInfo {
    private 'asset_id'?: string;
    private 'asset_name'?: string;
    private 'cover_url'?: string;
    private 'preview_video_url'?: string;
    public constructor(assetId?: string, assetName?: string) { 
        this['asset_id'] = assetId;
        this['asset_name'] = assetName;
    }
    public withAssetId(assetId: string): OutputAssetInfo {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetName(assetName: string): OutputAssetInfo {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withCoverUrl(coverUrl: string): OutputAssetInfo {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withPreviewVideoUrl(previewVideoUrl: string): OutputAssetInfo {
        this['preview_video_url'] = previewVideoUrl;
        return this;
    }
    public set previewVideoUrl(previewVideoUrl: string  | undefined) {
        this['preview_video_url'] = previewVideoUrl;
    }
    public get previewVideoUrl(): string | undefined {
        return this['preview_video_url'];
    }
}
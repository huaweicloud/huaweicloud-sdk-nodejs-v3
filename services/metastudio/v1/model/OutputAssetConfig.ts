

export class OutputAssetConfig {
    private 'asset_name'?: string;
    private 'is_preview_video'?: boolean;
    public constructor(assetName?: string) { 
        this['asset_name'] = assetName;
    }
    public withAssetName(assetName: string): OutputAssetConfig {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withIsPreviewVideo(isPreviewVideo: boolean): OutputAssetConfig {
        this['is_preview_video'] = isPreviewVideo;
        return this;
    }
    public set isPreviewVideo(isPreviewVideo: boolean  | undefined) {
        this['is_preview_video'] = isPreviewVideo;
    }
    public get isPreviewVideo(): boolean | undefined {
        return this['is_preview_video'];
    }
}
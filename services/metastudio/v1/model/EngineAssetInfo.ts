

export class EngineAssetInfo {
    private 'relative_path'?: string;
    private 'asset_type'?: string;
    public constructor() { 
    }
    public withRelativePath(relativePath: string): EngineAssetInfo {
        this['relative_path'] = relativePath;
        return this;
    }
    public set relativePath(relativePath: string  | undefined) {
        this['relative_path'] = relativePath;
    }
    public get relativePath(): string | undefined {
        return this['relative_path'];
    }
    public withAssetType(assetType: string): EngineAssetInfo {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): string | undefined {
        return this['asset_type'];
    }
}
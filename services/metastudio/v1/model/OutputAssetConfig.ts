

export class OutputAssetConfig {
    private 'asset_name'?: string;
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
}
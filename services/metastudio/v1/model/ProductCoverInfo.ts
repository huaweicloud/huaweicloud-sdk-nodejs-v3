

export class ProductCoverInfo {
    private 'asset_id'?: string;
    public constructor() { 
    }
    public withAssetId(assetId: string): ProductCoverInfo {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
}
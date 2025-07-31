

export class SetTtscGroupAssetsRequestBody {
    private 'asset_ids'?: Array<string>;
    public constructor() { 
    }
    public withAssetIds(assetIds: Array<string>): SetTtscGroupAssetsRequestBody {
        this['asset_ids'] = assetIds;
        return this;
    }
    public set assetIds(assetIds: Array<string>  | undefined) {
        this['asset_ids'] = assetIds;
    }
    public get assetIds(): Array<string> | undefined {
        return this['asset_ids'];
    }
}
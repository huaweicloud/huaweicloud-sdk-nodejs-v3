

export class ListAssetSummarysReq {
    private 'asset_ids'?: Array<string>;
    public constructor(assetIds?: Array<string>) { 
        this['asset_ids'] = assetIds;
    }
    public withAssetIds(assetIds: Array<string>): ListAssetSummarysReq {
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
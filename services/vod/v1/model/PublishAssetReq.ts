

export class PublishAssetReq {
    private 'asset_id'?: Array<string>;
    public constructor(assetId?: Array<string>) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: Array<string>): PublishAssetReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: Array<string>  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): Array<string> | undefined {
        return this['asset_id'];
    }
}
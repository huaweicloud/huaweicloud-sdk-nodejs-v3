

export class CreatePreheatingAssetReq {
    private 'asset_id'?: string | undefined;
    public urls?: Array<string>;
    public constructor() { 
    }
    public withAssetId(assetId: string): CreatePreheatingAssetReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
    public withUrls(urls: Array<string>): CreatePreheatingAssetReq {
        this['urls'] = urls;
        return this;
    }
}
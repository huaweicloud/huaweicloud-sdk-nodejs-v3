

export class RefreshTaskReq {
    private 'asset_id_list'?: Array<string>;
    public urls?: Array<string>;
    public constructor() { 
    }
    public withAssetIdList(assetIdList: Array<string>): RefreshTaskReq {
        this['asset_id_list'] = assetIdList;
        return this;
    }
    public set assetIdList(assetIdList: Array<string>  | undefined) {
        this['asset_id_list'] = assetIdList;
    }
    public get assetIdList(): Array<string> | undefined {
        return this['asset_id_list'];
    }
    public withUrls(urls: Array<string>): RefreshTaskReq {
        this['urls'] = urls;
        return this;
    }
}
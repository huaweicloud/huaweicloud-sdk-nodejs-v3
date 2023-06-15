

export class VodInfoV2 {
    private 'asset_id': string | undefined;
    private 'play_url'?: string | undefined;
    public constructor(assetId?: any) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: string): VodInfoV2 {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
    public withPlayUrl(playUrl: string): VodInfoV2 {
        this['play_url'] = playUrl;
        return this;
    }
    public set playUrl(playUrl: string | undefined) {
        this['play_url'] = playUrl;
    }
    public get playUrl() {
        return this['play_url'];
    }
}
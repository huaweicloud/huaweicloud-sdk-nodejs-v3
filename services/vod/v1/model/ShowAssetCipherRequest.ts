

export class ShowAssetCipherRequest {
    private 'X-Sdk-Date'?: string;
    private 'asset_id'?: string;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withXSdkDate(xSdkDate: string): ShowAssetCipherRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withAssetId(assetId: string): ShowAssetCipherRequest {
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
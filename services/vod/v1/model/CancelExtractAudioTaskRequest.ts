

export class CancelExtractAudioTaskRequest {
    private 'X-Sdk-Date'?: string | undefined;
    private 'asset_id': string | undefined;
    public constructor(assetId?: any) { 
        this['asset_id'] = assetId;
    }
    public withXSdkDate(xSdkDate: string): CancelExtractAudioTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withAssetId(assetId: string): CancelExtractAudioTaskRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
}
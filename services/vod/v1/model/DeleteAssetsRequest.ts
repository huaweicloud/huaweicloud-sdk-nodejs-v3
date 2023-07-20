

export class DeleteAssetsRequest {
    private 'X-Sdk-Date'?: string;
    private 'asset_id'?: Array<string>;
    private 'delete_type'?: string;
    public constructor(assetId?: Array<string>) { 
        this['asset_id'] = assetId;
    }
    public withXSdkDate(xSdkDate: string): DeleteAssetsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withAssetId(assetId: Array<string>): DeleteAssetsRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: Array<string>  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): Array<string> | undefined {
        return this['asset_id'];
    }
    public withDeleteType(deleteType: string): DeleteAssetsRequest {
        this['delete_type'] = deleteType;
        return this;
    }
    public set deleteType(deleteType: string  | undefined) {
        this['delete_type'] = deleteType;
    }
    public get deleteType(): string | undefined {
        return this['delete_type'];
    }
}
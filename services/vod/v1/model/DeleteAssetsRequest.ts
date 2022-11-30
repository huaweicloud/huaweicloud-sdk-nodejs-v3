

export class DeleteAssetsRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'asset_id': Array<string> | undefined;
    private 'delete_type'?: string | undefined;
    public constructor(assetId?: any) { 
        this['asset_id'] = assetId;
    }
    public withAuthorization(authorization: string): DeleteAssetsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): DeleteAssetsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withAssetId(assetId: Array<string>): DeleteAssetsRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: Array<string> | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
    public withDeleteType(deleteType: string): DeleteAssetsRequest {
        this['delete_type'] = deleteType;
        return this;
    }
    public set deleteType(deleteType: string | undefined) {
        this['delete_type'] = deleteType;
    }
    public get deleteType() {
        return this['delete_type'];
    }
}
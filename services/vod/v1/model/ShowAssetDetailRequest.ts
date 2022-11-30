

export class ShowAssetDetailRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'asset_id': string | undefined;
    public categories?: Array<ShowAssetDetailRequestCategoriesEnum>;
    public constructor(assetId?: any) { 
        this['asset_id'] = assetId;
    }
    public withAuthorization(authorization: string): ShowAssetDetailRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowAssetDetailRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withAssetId(assetId: string): ShowAssetDetailRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
    public withCategories(categories: Array<ShowAssetDetailRequestCategoriesEnum>): ShowAssetDetailRequest {
        this['categories'] = categories;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAssetDetailRequestCategoriesEnum {
    BASE_INFO = 'base_info',
    TRANSCODE_INFO = 'transcode_info',
    THUMBNAIL_INFO = 'thumbnail_info',
    REVIEW_INFO = 'review_info'
}



export class ShowAssetDetailRequest {
    private 'X-Sdk-Date'?: string;
    private 'asset_id'?: string;
    public categories?: Array<ShowAssetDetailRequestCategoriesEnum> | Array<string>;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withXSdkDate(xSdkDate: string): ShowAssetDetailRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withAssetId(assetId: string): ShowAssetDetailRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withCategories(categories: Array<ShowAssetDetailRequestCategoriesEnum> | Array<string>): ShowAssetDetailRequest {
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

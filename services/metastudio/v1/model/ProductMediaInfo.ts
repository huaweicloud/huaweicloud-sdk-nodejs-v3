

export class ProductMediaInfo {
    private 'asset_id'?: string;
    private 'asset_type'?: ProductMediaInfoAssetTypeEnum | string;
    public order?: number;
    public constructor() { 
    }
    public withAssetId(assetId: string): ProductMediaInfo {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetType(assetType: ProductMediaInfoAssetTypeEnum | string): ProductMediaInfo {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: ProductMediaInfoAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): ProductMediaInfoAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withOrder(order: number): ProductMediaInfo {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProductMediaInfoAssetTypeEnum {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO'
}

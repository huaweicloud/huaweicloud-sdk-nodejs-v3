import { ProductMediaInfo } from './ProductMediaInfo';


export class ProductMediaDetailInfo {
    private 'asset_id'?: string;
    private 'asset_type'?: ProductMediaDetailInfoAssetTypeEnum | string;
    public order?: number;
    private 'asset_name'?: string;
    private 'asset_state'?: string;
    private 'cover_url'?: string;
    private 'thumbnail_url'?: string;
    private 'main_url'?: string;
    public constructor() { 
    }
    public withAssetId(assetId: string): ProductMediaDetailInfo {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetType(assetType: ProductMediaDetailInfoAssetTypeEnum | string): ProductMediaDetailInfo {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: ProductMediaDetailInfoAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): ProductMediaDetailInfoAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withOrder(order: number): ProductMediaDetailInfo {
        this['order'] = order;
        return this;
    }
    public withAssetName(assetName: string): ProductMediaDetailInfo {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetState(assetState: string): ProductMediaDetailInfo {
        this['asset_state'] = assetState;
        return this;
    }
    public set assetState(assetState: string  | undefined) {
        this['asset_state'] = assetState;
    }
    public get assetState(): string | undefined {
        return this['asset_state'];
    }
    public withCoverUrl(coverUrl: string): ProductMediaDetailInfo {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withThumbnailUrl(thumbnailUrl: string): ProductMediaDetailInfo {
        this['thumbnail_url'] = thumbnailUrl;
        return this;
    }
    public set thumbnailUrl(thumbnailUrl: string  | undefined) {
        this['thumbnail_url'] = thumbnailUrl;
    }
    public get thumbnailUrl(): string | undefined {
        return this['thumbnail_url'];
    }
    public withMainUrl(mainUrl: string): ProductMediaDetailInfo {
        this['main_url'] = mainUrl;
        return this;
    }
    public set mainUrl(mainUrl: string  | undefined) {
        this['main_url'] = mainUrl;
    }
    public get mainUrl(): string | undefined {
        return this['main_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProductMediaDetailInfoAssetTypeEnum {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO'
}

import { ProductCoverDetailInfo } from './ProductCoverDetailInfo';
import { ProductMediaDetailInfo } from './ProductMediaDetailInfo';
import { ProductTextInfo } from './ProductTextInfo';


export class ProductDetailInfo {
    private 'product_id'?: string;
    public name?: string;
    public description?: string;
    public tags?: Array<string>;
    public cover?: ProductCoverDetailInfo;
    private 'text_list'?: Array<ProductTextInfo>;
    private 'asset_list'?: Array<ProductMediaDetailInfo>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public state?: ProductDetailInfoStateEnum | string;
    public constructor() { 
    }
    public withProductId(productId: string): ProductDetailInfo {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withName(name: string): ProductDetailInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ProductDetailInfo {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): ProductDetailInfo {
        this['tags'] = tags;
        return this;
    }
    public withCover(cover: ProductCoverDetailInfo): ProductDetailInfo {
        this['cover'] = cover;
        return this;
    }
    public withTextList(textList: Array<ProductTextInfo>): ProductDetailInfo {
        this['text_list'] = textList;
        return this;
    }
    public set textList(textList: Array<ProductTextInfo>  | undefined) {
        this['text_list'] = textList;
    }
    public get textList(): Array<ProductTextInfo> | undefined {
        return this['text_list'];
    }
    public withAssetList(assetList: Array<ProductMediaDetailInfo>): ProductDetailInfo {
        this['asset_list'] = assetList;
        return this;
    }
    public set assetList(assetList: Array<ProductMediaDetailInfo>  | undefined) {
        this['asset_list'] = assetList;
    }
    public get assetList(): Array<ProductMediaDetailInfo> | undefined {
        return this['asset_list'];
    }
    public withCreateTime(createTime: string): ProductDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ProductDetailInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withState(state: ProductDetailInfoStateEnum | string): ProductDetailInfo {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProductDetailInfoStateEnum {
    ACTIVED = 'ACTIVED',
    UNACTIVED = 'UNACTIVED',
    BLOCK = 'BLOCK',
    DELETED = 'DELETED'
}

import { ProductCoverInfo } from './ProductCoverInfo';
import { ProductMediaInfo } from './ProductMediaInfo';
import { ProductTextInfo } from './ProductTextInfo';


export class ProductBasicInfo {
    public name?: string;
    public description?: string;
    public tags?: Array<string>;
    public cover?: ProductCoverInfo;
    private 'text_list'?: Array<ProductTextInfo>;
    private 'asset_list'?: Array<ProductMediaInfo>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ProductBasicInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ProductBasicInfo {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): ProductBasicInfo {
        this['tags'] = tags;
        return this;
    }
    public withCover(cover: ProductCoverInfo): ProductBasicInfo {
        this['cover'] = cover;
        return this;
    }
    public withTextList(textList: Array<ProductTextInfo>): ProductBasicInfo {
        this['text_list'] = textList;
        return this;
    }
    public set textList(textList: Array<ProductTextInfo>  | undefined) {
        this['text_list'] = textList;
    }
    public get textList(): Array<ProductTextInfo> | undefined {
        return this['text_list'];
    }
    public withAssetList(assetList: Array<ProductMediaInfo>): ProductBasicInfo {
        this['asset_list'] = assetList;
        return this;
    }
    public set assetList(assetList: Array<ProductMediaInfo>  | undefined) {
        this['asset_list'] = assetList;
    }
    public get assetList(): Array<ProductMediaInfo> | undefined {
        return this['asset_list'];
    }
}
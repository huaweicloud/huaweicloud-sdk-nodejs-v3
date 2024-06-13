import { ProductBasicInfo } from './ProductBasicInfo';
import { ProductCoverInfo } from './ProductCoverInfo';
import { ProductMediaInfo } from './ProductMediaInfo';
import { ProductTextInfo } from './ProductTextInfo';


export class CreateProductRequestBody {
    public name?: string;
    public description?: string;
    public tags?: Array<string>;
    public cover?: ProductCoverInfo;
    private 'text_list'?: Array<ProductTextInfo>;
    private 'asset_list'?: Array<ProductMediaInfo>;
    private 'auto_active'?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateProductRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateProductRequestBody {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): CreateProductRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withCover(cover: ProductCoverInfo): CreateProductRequestBody {
        this['cover'] = cover;
        return this;
    }
    public withTextList(textList: Array<ProductTextInfo>): CreateProductRequestBody {
        this['text_list'] = textList;
        return this;
    }
    public set textList(textList: Array<ProductTextInfo>  | undefined) {
        this['text_list'] = textList;
    }
    public get textList(): Array<ProductTextInfo> | undefined {
        return this['text_list'];
    }
    public withAssetList(assetList: Array<ProductMediaInfo>): CreateProductRequestBody {
        this['asset_list'] = assetList;
        return this;
    }
    public set assetList(assetList: Array<ProductMediaInfo>  | undefined) {
        this['asset_list'] = assetList;
    }
    public get assetList(): Array<ProductMediaInfo> | undefined {
        return this['asset_list'];
    }
    public withAutoActive(autoActive: boolean): CreateProductRequestBody {
        this['auto_active'] = autoActive;
        return this;
    }
    public set autoActive(autoActive: boolean  | undefined) {
        this['auto_active'] = autoActive;
    }
    public get autoActive(): boolean | undefined {
        return this['auto_active'];
    }
}
import { ProductBasicInfo } from './ProductBasicInfo';
import { ProductCoverInfo } from './ProductCoverInfo';
import { ProductMediaInfo } from './ProductMediaInfo';
import { ProductTextInfo } from './ProductTextInfo';


export class UpdateProductRequestBody {
    public name?: string;
    public description?: string;
    public tags?: Array<string>;
    public cover?: ProductCoverInfo;
    private 'text_list'?: Array<ProductTextInfo>;
    private 'asset_list'?: Array<ProductMediaInfo>;
    public state?: UpdateProductRequestBodyStateEnum | string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateProductRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateProductRequestBody {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): UpdateProductRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withCover(cover: ProductCoverInfo): UpdateProductRequestBody {
        this['cover'] = cover;
        return this;
    }
    public withTextList(textList: Array<ProductTextInfo>): UpdateProductRequestBody {
        this['text_list'] = textList;
        return this;
    }
    public set textList(textList: Array<ProductTextInfo>  | undefined) {
        this['text_list'] = textList;
    }
    public get textList(): Array<ProductTextInfo> | undefined {
        return this['text_list'];
    }
    public withAssetList(assetList: Array<ProductMediaInfo>): UpdateProductRequestBody {
        this['asset_list'] = assetList;
        return this;
    }
    public set assetList(assetList: Array<ProductMediaInfo>  | undefined) {
        this['asset_list'] = assetList;
    }
    public get assetList(): Array<ProductMediaInfo> | undefined {
        return this['asset_list'];
    }
    public withState(state: UpdateProductRequestBodyStateEnum | string): UpdateProductRequestBody {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateProductRequestBodyStateEnum {
    ACTIVED = 'ACTIVED',
    UNACTIVED = 'UNACTIVED'
}

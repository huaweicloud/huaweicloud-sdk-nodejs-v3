import { ProductMediaInfo } from './ProductMediaInfo';
import { ProductTextInfo } from './ProductTextInfo';


export class ProductAssetReleation {
    private 'asset_item'?: ProductMediaInfo;
    private 'text_item'?: ProductTextInfo;
    public action?: ProductAssetReleationActionEnum | string;
    public constructor() { 
    }
    public withAssetItem(assetItem: ProductMediaInfo): ProductAssetReleation {
        this['asset_item'] = assetItem;
        return this;
    }
    public set assetItem(assetItem: ProductMediaInfo  | undefined) {
        this['asset_item'] = assetItem;
    }
    public get assetItem(): ProductMediaInfo | undefined {
        return this['asset_item'];
    }
    public withTextItem(textItem: ProductTextInfo): ProductAssetReleation {
        this['text_item'] = textItem;
        return this;
    }
    public set textItem(textItem: ProductTextInfo  | undefined) {
        this['text_item'] = textItem;
    }
    public get textItem(): ProductTextInfo | undefined {
        return this['text_item'];
    }
    public withAction(action: ProductAssetReleationActionEnum | string): ProductAssetReleation {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProductAssetReleationActionEnum {
    LINK = 'LINK',
    UNLINK = 'UNLINK'
}

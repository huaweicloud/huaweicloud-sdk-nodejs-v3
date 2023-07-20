import { ProductInfo } from './ProductInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMeteringResponse extends SdkResponse {
    private 'product_info_list'?: Array<ProductInfo>;
    public constructor() { 
        super();
    }
    public withProductInfoList(productInfoList: Array<ProductInfo>): ShowMeteringResponse {
        this['product_info_list'] = productInfoList;
        return this;
    }
    public set productInfoList(productInfoList: Array<ProductInfo>  | undefined) {
        this['product_info_list'] = productInfoList;
    }
    public get productInfoList(): Array<ProductInfo> | undefined {
        return this['product_info_list'];
    }
}
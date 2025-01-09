import { SharerProductInfo } from './SharerProductInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSharerProductsResponse extends SdkResponse {
    public products?: Array<SharerProductInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withProducts(products: Array<SharerProductInfo>): ListSharerProductsResponse {
        this['products'] = products;
        return this;
    }
    public withTotalCount(totalCount: number): ListSharerProductsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}
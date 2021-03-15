import { Page } from './Page';
import { ProductSummary } from './ProductSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProductsResponse extends SdkResponse {
    public products?: Array<ProductSummary>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withProducts(products: Array<ProductSummary>): ListProductsResponse {
        this['products'] = products;
        return this;
    }
    public withPage(page: Page): ListProductsResponse {
        this['page'] = page;
        return this;
    }
}
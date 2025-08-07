import { MarketplaceEngineProduct } from './MarketplaceEngineProduct';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMarketplaceEngineProductsResponse extends SdkResponse {
    private 'marketplace_engine_products'?: Array<MarketplaceEngineProduct>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withMarketplaceEngineProducts(marketplaceEngineProducts: Array<MarketplaceEngineProduct>): ListMarketplaceEngineProductsResponse {
        this['marketplace_engine_products'] = marketplaceEngineProducts;
        return this;
    }
    public set marketplaceEngineProducts(marketplaceEngineProducts: Array<MarketplaceEngineProduct>  | undefined) {
        this['marketplace_engine_products'] = marketplaceEngineProducts;
    }
    public get marketplaceEngineProducts(): Array<MarketplaceEngineProduct> | undefined {
        return this['marketplace_engine_products'];
    }
    public withTotalCount(totalCount: number): ListMarketplaceEngineProductsResponse {
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
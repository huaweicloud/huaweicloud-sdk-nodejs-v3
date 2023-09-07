import { RecommendedProduct } from './RecommendedProduct';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesRecommendationResponse extends SdkResponse {
    public engine?: ListInstancesRecommendationResponseEngineEnum | string;
    private 'recommended_products'?: Array<RecommendedProduct>;
    public constructor() { 
        super();
    }
    public withEngine(engine: ListInstancesRecommendationResponseEngineEnum | string): ListInstancesRecommendationResponse {
        this['engine'] = engine;
        return this;
    }
    public withRecommendedProducts(recommendedProducts: Array<RecommendedProduct>): ListInstancesRecommendationResponse {
        this['recommended_products'] = recommendedProducts;
        return this;
    }
    public set recommendedProducts(recommendedProducts: Array<RecommendedProduct>  | undefined) {
        this['recommended_products'] = recommendedProducts;
    }
    public get recommendedProducts(): Array<RecommendedProduct> | undefined {
        return this['recommended_products'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRecommendationResponseEngineEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver'
}

import { ListEngineProductsEntity } from './ListEngineProductsEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEngineProductsResponse extends SdkResponse {
    public engine?: string;
    public versions?: Array<string>;
    public products?: Array<ListEngineProductsEntity>;
    public constructor() { 
        super();
    }
    public withEngine(engine: string): ListEngineProductsResponse {
        this['engine'] = engine;
        return this;
    }
    public withVersions(versions: Array<string>): ListEngineProductsResponse {
        this['versions'] = versions;
        return this;
    }
    public withProducts(products: Array<ListEngineProductsEntity>): ListEngineProductsResponse {
        this['products'] = products;
        return this;
    }
}
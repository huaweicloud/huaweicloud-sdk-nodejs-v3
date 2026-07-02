import { ListEngineProductsEntity } from './ListEngineProductsEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEngineProductsResponse extends SdkResponse {
    public engine?: string;
    public total?: number;
    private 'next_offset'?: number;
    private 'previous_offset'?: number;
    public versions?: Array<string>;
    public products?: Array<ListEngineProductsEntity>;
    public constructor() { 
        super();
    }
    public withEngine(engine: string): ListEngineProductsResponse {
        this['engine'] = engine;
        return this;
    }
    public withTotal(total: number): ListEngineProductsResponse {
        this['total'] = total;
        return this;
    }
    public withNextOffset(nextOffset: number): ListEngineProductsResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number  | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset(): number | undefined {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ListEngineProductsResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number  | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset(): number | undefined {
        return this['previous_offset'];
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
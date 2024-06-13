import { ProductDetailInfo } from './ProductDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProductsResponse extends SdkResponse {
    public count?: number;
    public products?: Array<ProductDetailInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListProductsResponse {
        this['count'] = count;
        return this;
    }
    public withProducts(products: Array<ProductDetailInfo>): ListProductsResponse {
        this['products'] = products;
        return this;
    }
    public withXRequestId(xRequestId: string): ListProductsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}
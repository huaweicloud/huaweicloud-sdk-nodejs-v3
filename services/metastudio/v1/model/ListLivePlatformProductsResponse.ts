import { PlatformProductInfo } from './PlatformProductInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLivePlatformProductsResponse extends SdkResponse {
    public count?: number;
    public products?: Array<PlatformProductInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListLivePlatformProductsResponse {
        this['count'] = count;
        return this;
    }
    public withProducts(products: Array<PlatformProductInfo>): ListLivePlatformProductsResponse {
        this['products'] = products;
        return this;
    }
    public withXRequestId(xRequestId: string): ListLivePlatformProductsResponse {
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
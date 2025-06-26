import { ProductInfo } from './ProductInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProductResponse extends SdkResponse {
    private 'availability_zone'?: string;
    private 'os_type'?: string;
    public products?: Array<ProductInfo>;
    public constructor() { 
        super();
    }
    public withAvailabilityZone(availabilityZone: string): ListProductResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withOsType(osType: string): ListProductResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withProducts(products: Array<ProductInfo>): ListProductResponse {
        this['products'] = products;
        return this;
    }
}
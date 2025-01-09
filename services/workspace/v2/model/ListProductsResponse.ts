import { Product } from './Product';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProductsResponse extends SdkResponse {
    private 'os_type'?: string;
    public architecture?: string;
    private 'availability_zone'?: string;
    public products?: Array<Product>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withOsType(osType: string): ListProductsResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withArchitecture(architecture: string): ListProductsResponse {
        this['architecture'] = architecture;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ListProductsResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withProducts(products: Array<Product>): ListProductsResponse {
        this['products'] = products;
        return this;
    }
    public withTotalCount(totalCount: number): ListProductsResponse {
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
import { PackageProductDetail } from './PackageProductDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPackageProductsResponse extends SdkResponse {
    private 'package_products'?: Array<PackageProductDetail>;
    public constructor() { 
        super();
    }
    public withPackageProducts(packageProducts: Array<PackageProductDetail>): ListPackageProductsResponse {
        this['package_products'] = packageProducts;
        return this;
    }
    public set packageProducts(packageProducts: Array<PackageProductDetail>  | undefined) {
        this['package_products'] = packageProducts;
    }
    public get packageProducts(): Array<PackageProductDetail> | undefined {
        return this['package_products'];
    }
}
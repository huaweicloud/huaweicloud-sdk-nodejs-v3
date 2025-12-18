import { PackageProductRequestDetail } from './PackageProductRequestDetail';


export class SubscribePackageProductsRequestBody {
    private 'package_products'?: Array<PackageProductRequestDetail>;
    public constructor(packageProducts?: Array<PackageProductRequestDetail>) { 
        this['package_products'] = packageProducts;
    }
    public withPackageProducts(packageProducts: Array<PackageProductRequestDetail>): SubscribePackageProductsRequestBody {
        this['package_products'] = packageProducts;
        return this;
    }
    public set packageProducts(packageProducts: Array<PackageProductRequestDetail>  | undefined) {
        this['package_products'] = packageProducts;
    }
    public get packageProducts(): Array<PackageProductRequestDetail> | undefined {
        return this['package_products'];
    }
}
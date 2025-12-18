

export class PackageProductDetail {
    private 'product_name'?: string;
    private 'resource_spec_code'?: string;
    private 'period_type'?: string;
    private 'instance_type'?: string;
    public constructor(productName?: string, resourceSpecCode?: string, periodType?: string, instanceType?: string) { 
        this['product_name'] = productName;
        this['resource_spec_code'] = resourceSpecCode;
        this['period_type'] = periodType;
        this['instance_type'] = instanceType;
    }
    public withProductName(productName: string): PackageProductDetail {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withResourceSpecCode(resourceSpecCode: string): PackageProductDetail {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withPeriodType(periodType: string): PackageProductDetail {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): string | undefined {
        return this['period_type'];
    }
    public withInstanceType(instanceType: string): PackageProductDetail {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
}


export class HourPackageInfo {
    private 'root_order_id'?: string;
    private 'package_resource_id'?: string;
    private 'package_instance_id'?: string;
    private 'package_spec_code'?: string;
    private 'combined_product_type_code'?: string;
    private 'use_up_policy'?: string;
    private 'package_duration'?: number;
    private 'use_duration'?: number;
    public constructor() { 
    }
    public withRootOrderId(rootOrderId: string): HourPackageInfo {
        this['root_order_id'] = rootOrderId;
        return this;
    }
    public set rootOrderId(rootOrderId: string  | undefined) {
        this['root_order_id'] = rootOrderId;
    }
    public get rootOrderId(): string | undefined {
        return this['root_order_id'];
    }
    public withPackageResourceId(packageResourceId: string): HourPackageInfo {
        this['package_resource_id'] = packageResourceId;
        return this;
    }
    public set packageResourceId(packageResourceId: string  | undefined) {
        this['package_resource_id'] = packageResourceId;
    }
    public get packageResourceId(): string | undefined {
        return this['package_resource_id'];
    }
    public withPackageInstanceId(packageInstanceId: string): HourPackageInfo {
        this['package_instance_id'] = packageInstanceId;
        return this;
    }
    public set packageInstanceId(packageInstanceId: string  | undefined) {
        this['package_instance_id'] = packageInstanceId;
    }
    public get packageInstanceId(): string | undefined {
        return this['package_instance_id'];
    }
    public withPackageSpecCode(packageSpecCode: string): HourPackageInfo {
        this['package_spec_code'] = packageSpecCode;
        return this;
    }
    public set packageSpecCode(packageSpecCode: string  | undefined) {
        this['package_spec_code'] = packageSpecCode;
    }
    public get packageSpecCode(): string | undefined {
        return this['package_spec_code'];
    }
    public withCombinedProductTypeCode(combinedProductTypeCode: string): HourPackageInfo {
        this['combined_product_type_code'] = combinedProductTypeCode;
        return this;
    }
    public set combinedProductTypeCode(combinedProductTypeCode: string  | undefined) {
        this['combined_product_type_code'] = combinedProductTypeCode;
    }
    public get combinedProductTypeCode(): string | undefined {
        return this['combined_product_type_code'];
    }
    public withUseUpPolicy(useUpPolicy: string): HourPackageInfo {
        this['use_up_policy'] = useUpPolicy;
        return this;
    }
    public set useUpPolicy(useUpPolicy: string  | undefined) {
        this['use_up_policy'] = useUpPolicy;
    }
    public get useUpPolicy(): string | undefined {
        return this['use_up_policy'];
    }
    public withPackageDuration(packageDuration: number): HourPackageInfo {
        this['package_duration'] = packageDuration;
        return this;
    }
    public set packageDuration(packageDuration: number  | undefined) {
        this['package_duration'] = packageDuration;
    }
    public get packageDuration(): number | undefined {
        return this['package_duration'];
    }
    public withUseDuration(useDuration: number): HourPackageInfo {
        this['use_duration'] = useDuration;
        return this;
    }
    public set useDuration(useDuration: number  | undefined) {
        this['use_duration'] = useDuration;
    }
    public get useDuration(): number | undefined {
        return this['use_duration'];
    }
}
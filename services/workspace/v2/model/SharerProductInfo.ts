

export class SharerProductInfo {
    private 'product_id'?: string;
    private 'is_gpu'?: boolean;
    public descriptions?: string;
    private 'charge_mode'?: string;
    private 'resource_type'?: string;
    private 'cloud_service_type'?: string;
    private 'package_type'?: string;
    public name?: { [key: string]: string; };
    private 'share_space_size'?: number;
    public constructor() { 
    }
    public withProductId(productId: string): SharerProductInfo {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withIsGpu(isGpu: boolean): SharerProductInfo {
        this['is_gpu'] = isGpu;
        return this;
    }
    public set isGpu(isGpu: boolean  | undefined) {
        this['is_gpu'] = isGpu;
    }
    public get isGpu(): boolean | undefined {
        return this['is_gpu'];
    }
    public withDescriptions(descriptions: string): SharerProductInfo {
        this['descriptions'] = descriptions;
        return this;
    }
    public withChargeMode(chargeMode: string): SharerProductInfo {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withResourceType(resourceType: string): SharerProductInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCloudServiceType(cloudServiceType: string): SharerProductInfo {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withPackageType(packageType: string): SharerProductInfo {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withName(name: { [key: string]: string; }): SharerProductInfo {
        this['name'] = name;
        return this;
    }
    public withShareSpaceSize(shareSpaceSize: number): SharerProductInfo {
        this['share_space_size'] = shareSpaceSize;
        return this;
    }
    public set shareSpaceSize(shareSpaceSize: number  | undefined) {
        this['share_space_size'] = shareSpaceSize;
    }
    public get shareSpaceSize(): number | undefined {
        return this['share_space_size'];
    }
}
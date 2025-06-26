

export class ListProductRequest {
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    private 'availability_zone'?: string;
    private 'os_type'?: string;
    private 'charge_mode'?: string;
    public architecture?: string;
    private 'package_type'?: string;
    public constructor() { 
    }
    public withProductId(productId: string): ListProductRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): ListProductRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withAvailabilityZone(availabilityZone: string): ListProductRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withOsType(osType: string): ListProductRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withChargeMode(chargeMode: string): ListProductRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withArchitecture(architecture: string): ListProductRequest {
        this['architecture'] = architecture;
        return this;
    }
    public withPackageType(packageType: string): ListProductRequest {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
}
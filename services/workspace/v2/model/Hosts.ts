

export class Hosts {
    private 'availability_zone'?: string;
    public name?: string;
    private 'auto_placement'?: string;
    private 'host_type'?: string;
    public quantity?: number;
    private 'product_id'?: string;
    public constructor(availabilityZone?: string, name?: string, hostType?: string, quantity?: number, productId?: string) { 
        this['availability_zone'] = availabilityZone;
        this['name'] = name;
        this['host_type'] = hostType;
        this['quantity'] = quantity;
        this['product_id'] = productId;
    }
    public withAvailabilityZone(availabilityZone: string): Hosts {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withName(name: string): Hosts {
        this['name'] = name;
        return this;
    }
    public withAutoPlacement(autoPlacement: string): Hosts {
        this['auto_placement'] = autoPlacement;
        return this;
    }
    public set autoPlacement(autoPlacement: string  | undefined) {
        this['auto_placement'] = autoPlacement;
    }
    public get autoPlacement(): string | undefined {
        return this['auto_placement'];
    }
    public withHostType(hostType: string): Hosts {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withQuantity(quantity: number): Hosts {
        this['quantity'] = quantity;
        return this;
    }
    public withProductId(productId: string): Hosts {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
}
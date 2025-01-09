

export class SimpleProduct {
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    public type?: string;
    public cpu?: string;
    public memory?: string;
    public descriptions?: string;
    private 'charge_mode'?: string;
    public constructor() { 
    }
    public withProductId(productId: string): SimpleProduct {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): SimpleProduct {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withType(type: string): SimpleProduct {
        this['type'] = type;
        return this;
    }
    public withCpu(cpu: string): SimpleProduct {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: string): SimpleProduct {
        this['memory'] = memory;
        return this;
    }
    public withDescriptions(descriptions: string): SimpleProduct {
        this['descriptions'] = descriptions;
        return this;
    }
    public withChargeMode(chargeMode: string): SimpleProduct {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
}